import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from 'src/app/models/address';


@Injectable({
  providedIn: 'root'
})
export class LocatorService {

  private url!: string;

  constructor(private http: HttpClient) { }

  setCep(cep: string){
    this.url = `https://viacep.com.br/ws/${cep}/json`;
  }

  getAddress(){
    return this.http.get<Address>(this.url);
  }

}