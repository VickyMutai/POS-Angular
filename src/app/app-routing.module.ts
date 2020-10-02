import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginPageComponent} from './registration/login-page/login-page.component';
import { ClientComponent } from './admin/client/client.component';
import { DashComponent } from './admin/dash/dash.component';
import { UsersComponent } from './admin/users/users.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'client', component: ClientComponent},
  { path: 'admin/dashboard', component: DashComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
