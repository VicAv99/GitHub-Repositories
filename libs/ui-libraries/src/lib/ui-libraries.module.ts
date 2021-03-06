import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreDataModule } from '@gh/core-data';
import { MaterialModule } from '@gh/material';
import { AboutComponent } from './about/about.component';
import { CallbackComponent } from './callback/callback.component';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const COMPONENTS = [AboutComponent, CallbackComponent, LoginComponent, ToolbarComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreDataModule,
    MaterialModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class UiLibrariesModule {}
