import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import {  FormsModule } from '@angular/forms';
import { DataService } from './servicio/data.service'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PrivadoComponent } from './componentes/privado/privado.component';

import { ContactosComponent } from './componentes/privado/contactos/contactos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NavbarComponent,
    PrivadoComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
 }
