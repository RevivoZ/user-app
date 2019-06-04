import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCounter from './users.reducer';

export interface State {
  userData: fromCounter.State;
}

export const reducers: ActionReducerMap<State> = {
  userData: fromCounter.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
