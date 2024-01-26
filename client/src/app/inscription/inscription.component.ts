// inscription.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscriptionService } from './inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  inscriptionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private inscriptionService: InscriptionService
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
        },
        (error) => {
          console.error('Erreur lors de l\'inscription :', error);
        }
      );
    }
  }
}
