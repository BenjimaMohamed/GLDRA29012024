// login.component.ts

import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute)  {}

  

  // login.component.ts

  onSubmit(): void {
    this.loginService.login(this.username, this.password).subscribe(
      (response) => {
        // Traitez la réponse du serveur en conséquence
        console.log('Réponse du serveur :', response);
  
        // Si la réponse est un succès, redirigez l'utilisateur vers le tableau de bord
        if (response.message === 'Connexion réussie') {
          console.log('Redirection vers le tableau de bord...');
          this.router.navigateByUrl('/dashboard-visiteur');
        } else {
          console.log('La réponse du serveur ne contient pas "Connexion réussie".');
        }
      },
      (error) => {
        console.error('Erreur lors de la requête au serveur :', error);
        // Gérez l'erreur selon vos besoins
      }
    );
  }
  goToInscription() {
    this.router.navigate(['/inscription']);
  }
}
