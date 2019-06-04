import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { State } from '../reducers/users.reducer';
import * as actions from '../reducers/users-actions/user-action.actions';
import { timeout } from 'q';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private store: Store<State>) { }

  id: number;
  thisUser;
  errMsg: string = '';

  settings;
  data;

  settingsPosts;
  dataPosts;

  ngOnInit() {
    this.id = + this.route.snapshot.paramMap.get('id');

    // Checking if admin & Subscribe to the user details
    this.store.subscribe(sub => {
      if (sub["userData"].isAdmin) {
        this.errMsg = '';
        let result = sub["userData"].users;
        this.thisUser = result.filter(user => user.id == this.id);
        this.data = this.thisUser;
        this.thisUser = this.thisUser[0];

        this.thisUser ? this.dataPosts = this.thisUser.posts : null; // load posts
      } else {
        this.errMsg = 'Sorry, you have no authorization to access this page';
      }
    })

    // Table settings(view)
    this.settings = {
      hideSubHeader: true,
      actions: false,
      columns: {
        id: {
          title: 'ID', filter: false,
          width: '80px'
        },
        username: {
          title: 'User Name', filter: false
        },
        adress: {
          title: 'Adress'
        },
        email: {
          title: 'Email', filter: false
        }
      }
    };

    // Posts Table settings(view)
    this.settingsPosts = {
      hideSubHeader: true,
      actions: false,
      columns: {
        id: {
          title: 'ID', filter: false,
          width: '80px'
        },
        title: {
          title: 'Title', filter: false
        },
        body: {
          title: 'Body', filter: false
        },
      }
    };

  }


}
