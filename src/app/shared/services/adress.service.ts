import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adress } from 'src/app/models/adress';

@Injectable({
  providedIn: 'root'
})
export class AdressService {

  private cep: string = "";
  private baseUrl!: string;

  constructor(private http: HttpClient) { }

  setCep(cep: string){
    this.cep = cep;
    this.baseUrl = `https://viacep.com.br/ws/${this.cep}/json`; 
  }
  getCep(){
    return this.cep;
  }
  getAdress(){
    return this.http.get<Adress>(this.baseUrl);
  }

}
