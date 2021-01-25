import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { LoginComponent } from './component/Auth/login/login.component';
import { SignupComponent } from './component/Auth/signup/signup.component';
import { ContactComponent } from './component/contact/contact.component';
import { FeaturesComponent } from './component/features/features.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'feature', component: FeaturesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
