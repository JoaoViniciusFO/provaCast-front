import { Component, OnInit } from '@angular/core';
import { Conta } from 'entity/conta';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ContasService } from 'providers/conta-service';

@Component({
  selector: 'app-formulario-contas',
  templateUrl: './formulario-contas.component.html',
  styleUrls: ['./formulario-contas.component.css']
})
export class FormularioContasComponent {
  public conta: Conta;
  public service: string;

  constructor(private route: ActivatedRoute, private contaService: ContasService) {
    if(this.route.snapshot.params["conta"]){
      this.conta = this.route.snapshot.params["conta"];
      this.service = "createConta";
    } else {
      this.conta = new Conta();
      this.service = "updateConta";
    }
  }

  save(){
    this.contaService[this.service](this.conta)
    .subscribe(
      res=>{
        console.log("Sucesso")
      },
      err =>{
        console.log("Erro")
      }
    )
  }

}
