import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard'
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { LogoutComponentComponent } from './logout-component/logout-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ApiServiceService } from './api-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    HomeComponentComponent,
    LogoutComponentComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponentComponent
      },
      {
        path: '',
        component: HomeComponentComponent
      },
      {
        path: 'logout',
        component: LogoutComponentComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ])
  ],
  providers: [AuthService, UserService,AuthGuard, ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
