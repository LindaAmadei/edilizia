import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  standalone:false,
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {
  contattoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contattoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      oggetto: [''],
      messaggio: ['']
    });
  }

  onSubmit(): void {
    if (this.contattoForm.valid) {
      // Qui implementare l'invio via HttpClient oppure altra logica
      console.log('Messaggio inviato:', this.contattoForm.value);
      this.contattoForm.reset();
    }
  }
}
