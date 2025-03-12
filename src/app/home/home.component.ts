import { Component, OnInit } from '@angular/core';

interface Servizio {
  titolo: string;
  descrizione: string;
  immagine: string;
}

interface Progetto {
  id: number;
  titolo: string;
  descrizione: string;
  immagine: string;
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  servizi2: Servizio[] = [
    { titolo: 'Costruzioni', descrizione: 'Realizzazione di nuovi edifici con materiali di alta qualità.', immagine: 'assets/servizio1.jpg' },
    { titolo: 'Ristrutturazioni', descrizione: 'Interventi di rinnovamento per abitazioni e uffici.', immagine: 'assets/servizio2.jpg' },
    // Aggiungi altri servizi
  ];

  progetti: Progetto[] = [
    { id: 1, titolo: 'Progetto Residenziale', descrizione: 'Moderni edifici residenziali nel centro città.', immagine: 'assets/progetto1.jpg' },
    { id: 2, titolo: 'Complesso Commerciale', descrizione: 'Spazi commerciali funzionali e innovativi.', immagine: 'assets/progetto2.jpg' },
    // Aggiungi altri progetti
  ];

  ngOnInit(): void {}
}