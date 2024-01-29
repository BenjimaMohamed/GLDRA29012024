// dashboard-visiteur.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface Plat {
  nom: string;
  image: string;
}

@Component({
  selector: 'app-dashboard-visiteur',
  templateUrl: './dashboard-visiteur.component.html',
  styleUrls: ['./dashboard-visiteur.component.css']
})
export class DashboardVisiteurComponent {
  constructor(private router: Router) { }

  onCartButtonClick(): void {
    // Ajoutez d'autres logiques si nécessaire

    // Redirigez vers l'interface de connexion (login)
    this.router.navigate(['/login']);
}
}
