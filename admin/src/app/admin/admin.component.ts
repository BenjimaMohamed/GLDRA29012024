import { Component, OnInit } from '@angular/core';
 
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  visiteurs: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getVisiteurs();
  }

  getVisiteurs(): void {
    this.adminService.getVisiteurs().subscribe((data) => {
      this.visiteurs = data;
    });
  }
  validerVisiteur(visiteur: any): void {
    this.adminService.validerVisiteur(visiteur).subscribe((response) => {
      console.log(response);
      // Mettez à jour la liste des visiteurs après la validation
      this.getVisiteurs();
    });
  }

  refuserVisiteur(visiteur: any): void {
    this.adminService.refuserVisiteur(visiteur).subscribe((response) => {
      console.log(response);
      // Mettez à jour la liste des visiteurs après le refus
      this.getVisiteurs();
    });
  }
}
 