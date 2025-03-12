import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-preventivo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './preventivi.component.html',
  styleUrls: ['./preventivi.component.css']
})
export class PreventiviComponent {
  preventivoForm: FormGroup;
  uploadedImages: File[] = [];
  uploadedDocs: File[] = [];

  constructor(private fb: FormBuilder) {
    this.preventivoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      budget: [''],
      messaggio: ['', Validators.required]
      // I file non vengono gestiti come form controls perché i file non sono serializzabili
    });
  }

  // Gestione del caricamento delle immagini
  onFileChangeImages(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.uploadedImages = Array.from(event.target.files);
    }
  }

  // Gestione del caricamento dei documenti (PDF)
  onFileChangeDocs(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.uploadedDocs = Array.from(event.target.files);
    }
  }

  onSubmit(): void {
    if (this.preventivoForm.valid) {
      // Stampa i valori del form e i file caricati per debug
      console.log('Dati preventivo:', this.preventivoForm.value);
      console.log('Foto caricate:', this.uploadedImages);
      console.log('Documenti PDF caricati:', this.uploadedDocs);

      alert('La tua richiesta di preventivo è stata inviata con successo!');
      
      // Reset del form e dei file caricati
      this.preventivoForm.reset();
      this.uploadedImages = [];
      this.uploadedDocs = [];
    }
  }
}
