import { createAction, props } from '@ngrx/store';

import { User } from '@gh/core-data';

export const userSelected = createAction(
  '[USER] User Selected',
  props<{ selectedUserId: string }>()
);

// Load Actions
export const loadUser = createAction('[USER] Load Users');

export const userLoaded = createAction(
  '[USER] Users Loaded',
  props<{ user: User }>()
);
