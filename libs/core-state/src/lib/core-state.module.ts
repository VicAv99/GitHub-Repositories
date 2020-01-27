import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataPersistence } from '@nrwl/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootStoreConfig, StoreModule } from '@ngrx/store';

import { CoreDataModule } from '@gh/core-data';
import { reducers } from '.';
import { UsersEffects } from './users/users.effects';
import { RepositoriesEffects } from './repositories/repositories.effects';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([
      RepositoriesEffects,
      UsersEffects
    ]),
    StoreDevtoolsModule.instrument({ name: 'GH Repositories Store' })
  ],
  providers: [DataPersistence]
})
export class CoreStateModule {}
