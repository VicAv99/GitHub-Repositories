import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  REPOSITORIES_FEATURE_KEY,
  repositoriesAdapter,
  RepositoriesPartialState,
  RepositoriesState
} from './repositories.reducer';

// Lookup the 'Repositories' feature state managed by NgRx
export const selectRepositoriesState = createFeatureSelector<
  RepositoriesPartialState,
  RepositoriesState
>(REPOSITORIES_FEATURE_KEY);

const { selectAll, selectEntities } = repositoriesAdapter.getSelectors();

export const selectRepositoriesLoading = createSelector(
  selectRepositoriesState,
  (state: RepositoriesState) => state.isLoading
);

export const selectAllRepositories = createSelector(
  selectRepositoriesState,
  (state: RepositoriesState) => selectAll(state)
);

export const selectRepositoriesEntities = createSelector(
  selectRepositoriesState,
  (state: RepositoriesState) => selectEntities(state)
);

export const selectRepositoryId = createSelector(
  selectRepositoriesState,
  (state: RepositoriesState) => state.selectedRepositoryId
);

export const selectRepository = createSelector(
  selectRepositoriesEntities,
  selectRepositoryId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
