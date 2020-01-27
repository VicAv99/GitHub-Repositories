import { ActionReducerMap } from '@ngrx/store';

import * as fromRepositories from './repositories/repositories.reducer';
import * as fromUsers from './users/users.reducer';

export interface AppState {
  repositories: fromRepositories.RepositoriesState;
  users: fromUsers.UsersState;
}

export const reducers: ActionReducerMap<AppState> = {
  repositories: fromRepositories.reducer,
  users: fromUsers.reducer
};

//---------------------------------------
// Common Selectors
//---------------------------------------
