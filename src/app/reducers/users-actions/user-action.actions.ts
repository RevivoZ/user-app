import { Action } from '@ngrx/store';

export enum UserActionActionTypes {
  LoadUserActions = '[UserAction] Load UserActions',
  CreateUser = '[Counter Component] CreateUser',
  UpdateUser = '[Counter Component] UpdateUser',
  DeleteUser = '[Counter Component] DeleteUser',
  GetUser = '[Counter Component] GetUser',
  IsAdmin = '[Counter Component] IsAdmin',
}

// Create action
export class CreateUser implements Action {
  readonly type = UserActionActionTypes.CreateUser;
  constructor(public user: { id: number, name: string, username: string; email: string }) { }
}

// Create action
export class UpdateUser implements Action {
  readonly type = UserActionActionTypes.UpdateUser;
  constructor(public user: { id: number, name: string, username: string; email: string }) { }
}

// Delet action
export class DeleteUser implements Action {
  readonly type = UserActionActionTypes.DeleteUser;
  constructor(public user: { id: number }) { }
}

// GetUser action
export class GetUser implements Action {
  readonly type = UserActionActionTypes.GetUser;
  constructor(public user: { id: number }) { }
}

// IsAdmin action
export class IsAdmin implements Action {
  readonly type = UserActionActionTypes.IsAdmin;
  constructor(public isAdmin: boolean) { }
}

// LoadUser action
export class LoadUserActions implements Action {
  readonly type = UserActionActionTypes.LoadUserActions;
  constructor(public users: []) { }

}


export type UserActionActions = LoadUserActions;
