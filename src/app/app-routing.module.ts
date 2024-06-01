import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PopupComponent } from './popup/popup.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'', component: LoginComponent},
  {path:'aboutus',component: AboutusComponent},
  {path:'popup', component:PopupComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
