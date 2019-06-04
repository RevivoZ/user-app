import { Action } from '@ngrx/store';
import { UserActionActionTypes } from './users-actions/user-action.actions';


export interface State {
  users;
  isAdmin;
}

export const initialState: State = {
  users: [{ id: 0, name: '', username: '', email: '' }],
  isAdmin: false
};

export function reducer(state = initialState, action: Action): State {

  switch (action.type) {

    // Load users from DB
    case UserActionActionTypes.LoadUserActions:
      state.users = action['users'];
      return state;

    // Is Admin ? (true : false)
    case UserActionActionTypes.IsAdmin:
      state.isAdmin = action['isAdmin'];
      return state;

    // Create user
    case UserActionActionTypes.CreateUser:
      state.users = [...state.users, { ...action['user'], posts: [] }];
      return state;

    // Update user
    case UserActionActionTypes.UpdateUser:
      state.users.map(user => {
        if (user.id != action['user'].id) {
          return user
        } else {
          return { ...user, ...action['user'] };
        }
      })
      return state;

    // Delete user
    case UserActionActionTypes.DeleteUser:
      let result = state.users.filter(user => user.id != action['user'].id);
      state.users = result;
      return state;

    // Get User
    case UserActionActionTypes.GetUser:
      let thisUser = state.users.filter(user => user.id == action['user'].id);
      return thisUser;

    default:
      return state;
  }
}
