import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PreventiviComponent } from './preventivi/preventivi.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContattiComponent } from './contatti/contatti.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HomeComponent,
    HeaderComponent,
    ContattiComponent,
    AppComponent,
    PreventiviComponent,
    FooterComponent
],
  providers: [],
  bootstrap: []
})
export class AppModule { }
