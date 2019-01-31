import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {InputTextModule} from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { ListagemContasComponent } from './listagem-contas/listagem-contas.component';
import { FormularioContasComponent } from './formulario-contas/formulario-contas.component';
import { ContasService } from 'providers/conta-service';

@NgModule({
  declarations: [
    AppComponent,
    ListagemContasComponent,
    FormularioContasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ContasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
