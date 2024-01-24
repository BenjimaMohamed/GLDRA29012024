import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { CommandesEnCoursComponent } from './commandes-en-cours/commandes-en-cours.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'statistiques', component: StatistiquesComponent },
  { path: 'commandes', component: CommandesEnCoursComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', redirectTo: '/statistiques', pathMatch: 'full' },
  // app-routing.module.ts
  { path: 'dashboard', component: DashboardComponent },
];