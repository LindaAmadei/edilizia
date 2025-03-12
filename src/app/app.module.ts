import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiziComponent } from './servizi/servizi.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContattiComponent } from './contatti/contatti.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiziComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContattiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
