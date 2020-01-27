import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as repositoriesActions from './repositories.actions';
import { Repository, RepositoriesService, NotifyService } from '@gh/core-data';
import { RepositoriesPartialState } from './repositories.reducer';
import { of } from 'rxjs';

@Injectable()
export class RepositoriesEffects {
  @Effect() loadRepositories$ = this.dataPersistence.fetch(repositoriesActions.loadRepositories, {
    run: (
      action: ReturnType<typeof repositoriesActions.loadRepositories>,
      state: RepositoriesPartialState
    ) => {
      return this.repositoriesService.all().pipe(
        map((repositories: Repository[]) => repositoriesActions.repositoriesLoaded({ repositories }))
      );
    },
    onError: (action: ReturnType<typeof repositoriesActions.loadRepositories>, error) => {
      this.notifyService.error(error.message);
    }
  });

  @Effect() addRepository$ = this.dataPersistence.pessimisticUpdate(repositoriesActions.createRepository, {
    run: (
      action: ReturnType<typeof repositoriesActions.createRepository>,
      state: RepositoriesPartialState
    ) => {
      return this.repositoriesService.create(action.repository).pipe(
        map((repository: Repository) => repositoriesActions.repositoryCreated({ repository }))
      );
    },
    onError: (action: ReturnType<typeof repositoriesActions.createRepository>, error) => {
      this.notifyService.error(error.message);
    }
  });

  @Effect() updateRepository$ = this.dataPersistence.pessimisticUpdate(repositoriesActions.updateRepository, {
    run: (
      action: ReturnType<typeof repositoriesActions.updateRepository>,
      state: RepositoriesPartialState
    ) => {
      return this.repositoriesService.update(action.repository).pipe(
        map((repository: Repository) => repositoriesActions.repositoryUpdated({ repository }))
      );
    },
    onError: (action: ReturnType<typeof repositoriesActions.updateRepository>, error) => {
      this.notifyService.error(error.message);
    }
  });

  @Effect() deleteRepository$ = this.dataPersistence.pessimisticUpdate(repositoriesActions.deleteRepository, {
    run: (
      action: ReturnType<typeof repositoriesActions.deleteRepository>,
      state: RepositoriesPartialState
    ) => {
      return of(action.repository).pipe(
        map((repository: Repository) => repositoriesActions.repositoryDeleted({ repository }))
      );
    },
    onError: (action: ReturnType<typeof repositoriesActions.deleteRepository>, error) => {
      this.notifyService.error(error.message);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<RepositoriesPartialState>,
    private repositoriesService: RepositoriesService,
    private notifyService: NotifyService
  ) {}
}
