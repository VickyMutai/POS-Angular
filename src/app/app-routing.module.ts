import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginPageComponent} from './registration/login-page/login-page.component';
import { ClientComponent } from './admin/client/client.component';
import { DashComponent } from './admin/dash/dash.component';
import { UsersComponent } from './admin/users/users.component';
import {ItemsComponent} from './dashboard/items/items.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clients', component: ClientComponent},
  { path: 'admin/dashboard', component: DashComponent },
  { path: 'users', component: UsersComponent },
  { path: 'items', component: ItemsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
