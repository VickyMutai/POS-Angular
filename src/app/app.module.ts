import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AngularFireModule } from "@angular/fire";
// import { AngularFireAuthModule } from "@angular/fire/auth";
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './registration/login-page/login-page.component';
import { RegisterComponent } from './registration/register/register.component';
import { ForgotPasswordComponent } from './registration/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './registration/verify-email/verify-email.component';
import { ClientComponent } from './admin/client/client.component';
import { UsersComponent } from './admin/users/users.component';
import { ItemsComponent } from './dashboard/items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    FooterComponent,
    LoginPageComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ClientComponent,
    UsersComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    // AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
