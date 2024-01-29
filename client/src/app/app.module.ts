// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importez FormsModule ici
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardVisiteurComponent } from './dashboard-visiteur/dashboard-visiteur.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardVisiteurComponent,
    DashboardComponent,
    InscriptionComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Ajoutez FormsModule ici
    // ... autres modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

