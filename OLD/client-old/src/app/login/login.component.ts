import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService) {}

  onSubmit(): void {
    this.loginService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Réponse du serveur :', response);
        // Traitez la réponse du serveur en conséquence
      },
      (error) => {
        console.error('Erreur lors de la requête au serveur :', error);
        // Traitez l'erreur en conséquence
      }
    );
  }
}
