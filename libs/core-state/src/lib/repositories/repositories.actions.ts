import { createAction, props } from '@ngrx/store';

import { Repository } from '@gh/core-data';

export const repositorySelected = createAction(
  '[REPOSITORY] Repository Selected',
  props<{ selectedRepositoryId: string }>()
);

// Load Actions
export const loadRepositories = createAction('[REPOSITORY] Load Repositories');

export const repositoriesLoaded = createAction(
  '[REPOSITORY] Repositories Loaded',
  props<{ repositories: Repository[] }>()
);

// Create Actions
export const createRepository = createAction(
  '[REPOSITORY] Create Repository',
  props<{ repository: Repository }>()
);

export const repositoryCreated = createAction(
  '[REPOSITORY] Repository Created',
  props<{ repository: Repository }>()
);

// Update Actions
export const updateRepository = createAction(
  '[REPOSITORY] Update Repository',
  props<{ repository: Repository }>()
);

export const repositoryUpdated = createAction(
  '[REPOSITORY] Repository Updated',
  props<{ repository: Repository }>()
);

// Delete Actions
export const deleteRepository = createAction(
  '[REPOSITORY] Delete Repository',
  props<{ repository: Repository }>()
);

export const repositoryDeleted = createAction(
  '[REPOSITORY] Repository Deleted',
  props<{ repository: Repository }>()
);
