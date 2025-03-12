import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  // Dati da iniettare in ciascun iframe
  framesData = [
    { id: 'frame1', title: 'Clienti Soddisfatti', text: '1000' },
    { id: 'frame2', title: 'Progetti Completati', text: '150' },
    { id: 'frame3', title: 'Anni di Esperienza', text: '10' },
    { id: 'frame4', title: 'Team di Esperti', text: '25' }
  ];

  ngAfterViewInit() {
    this.framesData.forEach(frame => {
      const iframe = document.getElementById(frame.id) as HTMLIFrameElement;
      if (iframe) {
        // Usa l'evento onload per iniettare il contenuto quando l'iframe è pronto
        iframe.onload = () => {
          const doc = iframe.contentDocument || iframe.contentWindow?.document;
          if (doc) {
            doc.open();
            doc.write(
              `<div style="display: flex; justify-content: center; align-items: center; height: 100%; font-family: Arial, sans-serif; margin: 0;">
                <div style="text-align: center;">
                  <h2 style="margin: 0 0 10px; font-size: 1.2em;">${frame.title}</h2>
                  <p style="margin: 0; font-size: 1.5em; font-weight: bold;">${frame.text}</p>
                </div>
              </div>`
            );
            doc.close();
          }
        };

        // Se l'iframe è già caricato, triggera manualmente onload
        if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
          iframe.onload(new Event('load'));
        }
      }
    });

  }
}
