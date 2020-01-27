import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreDataModule } from '@gh/core-data';
import { CoreStateModule } from '@gh/core-state';
import { MaterialModule } from '@gh/material';
import { UiLibrariesModule } from '@gh/ui-libraries';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';

@NgModule({
  declarations: [AppComponent, RepositoriesComponent],
  imports: [
    BrowserModule,
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
