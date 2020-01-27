import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  USERS_FEATURE_KEY,
  usersAdapter,
  UsersPartialState,
  UsersState
} from './users.reducer';

// Lookup the 'Users' feature state managed by NgRx
export const selectUsersState = createFeatureSelector<
  UsersPartialState,
  UsersState
>(USERS_FEATURE_KEY);

const { selectAll, selectEntities } = usersAdapter.getSelectors();

export const selectUsersLoading = createSelector(
  selectUsersState,
  (state: UsersState) => state.isLoading
);

export const selectAllUsers = createSelector(
  selectUsersState,
  (state: UsersState) => selectAll(state)
);

export const selectUsersEntities = createSelector(
  selectUsersState,
  (state: UsersState) => selectEntities(state)
);

export const selectUserId = createSelector(
  selectUsersState,
  (state: UsersState) => state.selectedUserId
);

export const selectUser = createSelector(
  selectUsersEntities,
  selectUserId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
