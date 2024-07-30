import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './layout/contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductInfoComponent } from './layout/product-info/product-info.component';
import { PrototiposLandingComponent } from './layout/prototipos-landing/prototipos-landing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiciosComponent } from './layout/servicios/servicios.component';
import { MessageListComponent} from './admin/message-list/message-list.component'
import { LoginComponent} from './auth/login/login.component'
import { HomeComponent} from '../app/home/home.component'
import { MapComponent} from '../app/map/map.component';
// import { ScheduleComponent} from '../app/schedule/schedule.component';
import { RegisterComponent } from './auth/register/register.component';


import {AdminOnlyDirective} from '../core/directiva/admin-only.directive'

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    ProductInfoComponent,
    PrototiposLandingComponent,
    AboutUsComponent,
    ServiciosComponent,
    AdminOnlyDirective,
    MessageListComponent,
    LoginComponent,
    RegisterComponent,
    MapComponent
    // ScheduleComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
