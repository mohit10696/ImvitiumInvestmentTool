import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [LoginComponent,SignupComponent],
  exports: [LoginComponent,SignupComponent],
  imports: [FormsModule,CommonModule,AppRoutingModule],
})
export class AuthModule {
  
}
