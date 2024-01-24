// dashboard-visiteur.component.ts
import { Component } from '@angular/core';

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
  plats: Plat[] = [
    { nom: 'Couscous', image: 'assets/images/Couscous.jpg' },
    { nom: 'Tajine', image: 'assets/images/Tajine.jpg' },
    { nom: 'Pastilla', image: 'assets/images/Bisteeya.jpg' },
    { nom: 'Harira', image: 'assets/images/Harira.jpeg' },
    { nom: 'Chbakia', image: 'assets/images/Chebakia.jpg' },
  ];
}
