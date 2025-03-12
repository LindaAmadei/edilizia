import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContattiComponent } from './contatti/contatti.component';
import { PreventiviComponent } from './preventivi/preventivi.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'preventivo', component: PreventiviComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: '**', redirectTo: 'home' }
];