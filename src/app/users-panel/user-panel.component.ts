import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { State } from '../reducers/users.reducer';

import * as actions from '../reducers/users-actions/user-action.actions';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})

export class UserPanelComponent implements OnInit {

  settings;
  data;

  isAdmin: boolean = true;
  errMsg: string = '';

  constructor(private http: HttpClient, private store: Store<State>, private router: Router) { }

  ngOnInit() {

    // Dispatch admin state
    this.store.dispatch(new actions.IsAdmin(this.isAdmin));

    // Subscribe to user-list to get updates
    this.store.subscribe(sub => {
      this.data = sub["userData"].users;
    })

    // Table settings(view)
    this.settings = {
      add: {
        confirmCreate: true,
      },
      edit: {
        confirmSave: true,
      },
      delete: {
        confirmDelete: true,
      },
      columns: {
        id: {
          title: 'ID',
          width: '80px'
        },
        username: {
          title: 'User Name'
        },
        adress: {
          title: 'Adress'
        },
        email: {
          title: 'Email'
        }
      },
      pager:
      {
        perPage: 5
      }
    };

  }

  // Dispatch actions (add / update / delete)
  onPostCall(event, act) {
    switch (act) {
      case "create":
        this.store.dispatch(new actions.CreateUser(event.newData));
        break;
      case "update":
        this.store.dispatch(new actions.UpdateUser(event.newData));
        break;
      case "delete":
        this.store.dispatch(new actions.DeleteUser(event.data));
        break;

      default:
        break;
    }

    event.confirm.resolve(event.newData); // Accept the changes locally(view)
  }

  // Dispatch when admin state change
  toggleAdmin(){
    this.store.dispatch(new actions.IsAdmin(this.isAdmin));
  }

  // Route to user page when click
  onUserRowSelect(event): void {
    if (this.isAdmin) {
      this.errMsg = '';
      this.router.navigate(['/user/' + event.data.id]);
    } else {
      this.errMsg = 'You are not an admin';
    }
  }

}
