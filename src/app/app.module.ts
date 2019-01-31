import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListagemContasComponent } from './listagem-contas/listagem-contas.component';
import { FormularioContasComponent } from './formulario-contas/formulario-contas.component';
import { ContasService } from 'providers/conta-service';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListagemContasComponent,
    FormularioContasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ContasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
