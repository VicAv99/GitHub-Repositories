import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import * as fromUsers from './users.reducer';
import * as usersActions from './users.actions';
import * as usersSelectors from './users.selectors';

@Injectable({
  providedIn: 'root'
})
export class UsersFacade {
  allUsers$ = this.store.pipe(select(usersSelectors.selectAllUsers));
  selectedUser$ = this.store.pipe(select(usersSelectors.selectUser));
  userLoading$ = this.store.pipe(select(usersSelectors.selectUsersLoading));

  constructor(private store: Store<fromUsers.UsersPartialState>) {}

  selectUser(selectedUserId: string) {
    this.dispatch(usersActions.userSelected({ selectedUserId }));
  }

  loadUser() {
    this.dispatch(usersActions.loadUser());
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
