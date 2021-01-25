import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { AboutModule } from './component/about/about.module';
import { FeatureModule } from './component/features/feature.module';
import { ContactModule } from './component/contact/contact.module';
import { HomeModule } from './component/home/home.module';
import { AuthModule } from './component/Auth/auth.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AboutModule,
    FeatureModule,
    ContactModule,
    HomeModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
