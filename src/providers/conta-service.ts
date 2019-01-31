import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Conta } from "entity/conta";

@Injectable()
export class ContasService {
    private url: string = "http://localhost:8080/ProvaCast/main/";

    constructor(private http: Http){
    }

    public listContas(): Observable<any>{
        return this.http.get(`${this.url}lista-contas`)
    }

    public createConta(conta: Conta): Observable<any>{
        return this.http.post(`${this.url}criar-conta`, conta)
    }

    public updateConta(conta: Conta): Observable<any>{
        return this.http.put(`${this.url}editar-conta`, conta)
    }
}