import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as repositoriesActions from './repositories.actions';
import { Repository } from '@gh/core-data';

export const REPOSITORIES_FEATURE_KEY = 'repositories';

export interface RepositoriesState extends EntityState<Repository> {
  selectedRepositoryId?: string | number;
  isLoading: boolean;
}

export interface RepositoriesPartialState {
  readonly [REPOSITORIES_FEATURE_KEY]: RepositoriesState;
}

export const repositoriesAdapter: EntityAdapter<Repository> = createEntityAdapter<Repository>();

export const initialState: RepositoriesState = repositoriesAdapter.getInitialState({
  // set initial required properties
  selectedRepositoryId: null,
  isLoading: false
});

const repositoriesReducer = createReducer(
  initialState,
  on(repositoriesActions.repositorySelected, (state, { selectedRepositoryId }) =>
    Object.assign({}, state, { selectedRepositoryId })
  ),
  on(repositoriesActions.repositoriesLoaded, (state, { repositories }) =>
    repositoriesAdapter.addAll(repositories, { ...state, isLoading: false })
  ),
  on(repositoriesActions.repositoryCreated, (state, { repository }) =>
    repositoriesAdapter.addOne(repository, { ...state, isLoading: false })
  ),
  on(repositoriesActions.repositoryUpdated, (state, { repository }) =>
    repositoriesAdapter.upsertOne(repository, { ...state, isLoading: false })
  ),
  on(repositoriesActions.repositoryDeleted, (state, { repository }) =>
    repositoriesAdapter.removeOne(repository.id, { ...state, isLoading: false })
  ),
  on(
    repositoriesActions.loadRepositories,
    repositoriesActions.createRepository,
    repositoriesActions.updateRepository,
    repositoriesActions.deleteRepository,
    (state) => ({
      ...state,
      isLoading: true
    })
  ),
);

export function reducer(state: RepositoriesState | undefined, action: Action) {
  return repositoriesReducer(state, action);
}
