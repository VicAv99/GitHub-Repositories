import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreDataModule } from '@gh/core-data';
import { CoreStateModule } from '@gh/core-state';
import { MaterialModule } from '@gh/material';
import { UiLibrariesModule } from '@gh/ui-libraries';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { RepositoriesListComponent } from './repositories/repositories-list/repositories-list.component';
import { RepositoriesDetailsComponent } from './repositories/repositories-details/repositories-details.component';

@NgModule({
  declarations: [AppComponent, RepositoriesComponent, RepositoriesListComponent, RepositoriesDetailsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLibrariesModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
