import { Component } from '@angular/core';
import { Cliente } from '../Interfaces/cliente';

@Component({
  selector: 'app-servizi',
  standalone: false,
  templateUrl: './servizi.component.html',
  styleUrl: './servizi.component.css'
})
export class ServiziComponent {
  servizi: Cliente = {
    id: 1,
    name: 'Claudio',
    surname: 'Zucca',
    age: 56
  };

}
