import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import * as fromRepositories from './repositories.reducer';
import * as repositoriesActions from './repositories.actions';
import * as repositoriesSelectors from './repositories.selectors';
import { Repository } from '@gh/core-data';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesFacade {
  allRepositories$ = this.store.pipe(select(repositoriesSelectors.selectAllRepositories));
  selectedRepository$ = this.store.pipe(select(repositoriesSelectors.selectRepository));
  repositoryLoading$ = this.store.pipe(select(repositoriesSelectors.selectRepositoriesLoading));

  constructor(private store: Store<fromRepositories.RepositoriesPartialState>) {}

  selectRepository(selectedRepositoryId: string) {
    this.dispatch(repositoriesActions.repositorySelected({ selectedRepositoryId }));
  }

  loadRepositories() {
    this.dispatch(repositoriesActions.loadRepositories());
  }

  createRepository(repository: Repository) {
    this.dispatch(repositoriesActions.createRepository({ repository }));
  }

  updateRepository(repository: Repository) {
    this.dispatch(repositoriesActions.updateRepository({ repository }));
  }

  deleteRepository(repository: Repository) {
    this.dispatch(repositoriesActions.deleteRepository({ repository }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
