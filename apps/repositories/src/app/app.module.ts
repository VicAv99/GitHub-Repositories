import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@gh/material';
import { UiLibrariesModule } from '@gh/ui-libraries';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';

@NgModule({
  declarations: [AppComponent, RepositoriesComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    UiLibrariesModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
