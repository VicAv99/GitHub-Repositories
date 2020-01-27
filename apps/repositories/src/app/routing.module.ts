import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@gh/core-data';
import { AboutComponent, CallbackComponent, LoginComponent } from '@gh/ui-libraries';
import { RepositoriesComponent } from './repositories/repositories.component';
import { RepositoriesDetailsComponent } from './repositories/repositories-details/repositories-details.component';

const routes: Routes = [
  {
    path: '', children: [
      {path: '', canActivate: [AuthGuard], component: RepositoriesComponent},
      {path: 'repo/:id', canActivate: [AuthGuard], component: RepositoriesDetailsComponent}
    ]
  },
  {path: 'about', component: AboutComponent},
  {path: 'callback', component: CallbackComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
