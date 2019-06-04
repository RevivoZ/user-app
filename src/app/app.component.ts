import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { State } from './reducers/users.reducer';
import { Action } from 'rxjs/internal/scheduler/Action';
import * as actions from './reducers/users-actions/user-action.actions';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'user-app';
  configUrl = 'http://localhost:3000/profile';

  constructor(private http: HttpClient, private store: Store<State>) { }

  ngOnInit() {
    // http request to get user-list and dispatch the list
    this.http.get(this.configUrl).subscribe((data: []) => {
      this.store.dispatch(new actions.LoadUserActions(data));
    });
  }

}

