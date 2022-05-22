import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adress } from 'src/app/models/adress';

@Injectable({
  providedIn: 'root'
})
export class AdressService {

  private readonly API: string = "https://viacep.com.br/ws/53240150/json"

  constructor(private http: HttpClient) { }

  getAdress(){
    return this.http.get<Adress>(this.API);
  }

}
