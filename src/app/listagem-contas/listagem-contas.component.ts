import { Component, OnInit } from '@angular/core';
import { ContasService } from 'providers/conta-service';
import { Conta } from 'entity/conta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-contas',
  templateUrl: './listagem-contas.component.html',
  styleUrls: ['./listagem-contas.component.css']
})
export class ListagemContasComponent {
  public listConta: any[];

  constructor(private contaService: ContasService, private route: Router) {
    this.listContas();
   }

   listContas(){
     this.contaService.listContas()
     .subscribe(
       res =>{
         this.listConta = res.json()
       },
       err=>{}
     )
   }

   editConta(conta: Conta){
      this.route.navigateByUrl("/formulario-contas", {queryParams: {conta: conta}})
   }
}
