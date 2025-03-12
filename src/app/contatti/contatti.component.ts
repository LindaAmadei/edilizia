import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent {}
