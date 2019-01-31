import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListagemContasComponent } from 'app/listagem-contas/listagem-contas.component';
import { FormularioContasComponent } from 'app/formulario-contas/formulario-contas.component';

const routes: Routes = [
  { path: 'lista-contas', component: ListagemContasComponent },
  { path: 'formulario-contas', component: FormularioContasComponent }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { 
  
}
