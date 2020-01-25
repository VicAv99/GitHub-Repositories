import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@gh/material';
import { UiLibrariesModule } from '@gh/ui-libraries';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    UiLibrariesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
