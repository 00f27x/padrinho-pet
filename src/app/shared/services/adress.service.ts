import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adress } from 'src/app/models/adress';

@Injectable({
  providedIn: 'root'
})
export class AdressService {

  private baseUrl!: string;
  address!: Adress;

  constructor(private http: HttpClient) { }

  setCep(cep: string){
    this.baseUrl = `https://viacep.com.br/ws/${cep}/json`; 
  }

  getAdress(){
    return this.http.get<Adress>(this.baseUrl);
  }
}
