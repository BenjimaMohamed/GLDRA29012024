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
    { nom: 'Couscous', image: 'url_image_couscous.jpg' },
    { nom: 'Tajine', image: 'url_image_tajine.jpg' },
    { nom: 'Pastilla', image: 'url_image_pastilla.jpg' },
    { nom: 'Harira', image: 'url_image_harira.jpg' },
    { nom: 'Chbakia', image: 'url_image_chbakia.jpg' },
  ];
}
