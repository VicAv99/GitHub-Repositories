import { Injectable } from '@angular/core';

import { Actions, ofType, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as usersActions from './users.actions';
import { User, UserService } from '@gh/core-data';
import { UsersPartialState } from './users.reducer';

@Injectable()
export class UsersEffects {
  @Effect() loadUsers$ = this.dataPersistence.fetch(usersActions.loadUser, {
    run: (
      action: ReturnType<typeof usersActions.loadUser>,
      state: UsersPartialState
    ) => {
      return this.usersService.user().pipe(
        map((user: User) => usersActions.userLoaded({ user })),
      );
    },
    onError: (action: ReturnType<typeof usersActions.loadUser>, error) => {
      console.log('Effect Error:', error);
    }
  });

  @Effect() selectUser$ = this.dataPersistence.actions.pipe(
    ofType(usersActions.userLoaded),
    map(({ user }) => usersActions.userSelected({selectedUserId: user.id}))
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<UsersPartialState>,
    private usersService: UserService
  ) {}
}
