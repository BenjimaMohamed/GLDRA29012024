// inscription.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscriptionService } from './inscription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  inscriptionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private inscriptionService: InscriptionService,
    private router: Router 
  ) {
    this.inscriptionForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.inscriptionForm.valid) {
      this.inscriptionService.inscription(this.inscriptionForm.value).subscribe(
        (response) => {
          console.log('Enregistrement effectué avec succès', response);
          this.router.navigate(['/login']);  // Redirection vers la page de connexion
        },
        (error) => {
          console.error('Erreur lors de l\'inscription :', error);
        }
      );
    }
    
  }
}