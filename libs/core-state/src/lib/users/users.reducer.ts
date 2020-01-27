import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as usersActions from './users.actions';
import { User } from '@gh/core-data';

export const USERS_FEATURE_KEY = 'users';

export interface UsersState extends EntityState<User> {
  selectedUserId?: string | number;
  isLoading: boolean;
}

export interface UsersPartialState {
  readonly [USERS_FEATURE_KEY]: UsersState;
}

export const usersAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UsersState = usersAdapter.getInitialState({
  // set initial required properties
  selectedUserId: null,
  isLoading: false
});

const usersReducer = createReducer(
  initialState,
  on(usersActions.userSelected, (state, { selectedUserId }) =>
    Object.assign({}, state, { selectedUserId })
  ),
  on(usersActions.userLoaded, (state, { user }) =>
    usersAdapter.addOne(user, { ...state, isLoading: false })
  ),
  on(usersActions.loadUser, (state) => ({
      ...state,
      isLoading: true
    })
  ),
);

export function reducer(state: UsersState | undefined, action: Action) {
  return usersReducer(state, action);
}
