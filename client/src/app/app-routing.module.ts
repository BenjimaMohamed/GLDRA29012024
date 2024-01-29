// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardVisiteurComponent } from './dashboard-visiteur/dashboard-visiteur.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirection par défaut vers le composant de connexion
  { path: 'dashboard-visiteur', component: DashboardVisiteurComponent },
  { path: 'login', component: LoginComponent },
  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inscription', component: InscriptionComponent },



  // ... autres routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

