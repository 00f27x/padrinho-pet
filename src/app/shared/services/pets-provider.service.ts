import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Pet } from 'src/app/models/pet';
import { ReturnedObject } from 'src/app/models/returned-object';



@Injectable({
  providedIn: 'root'
})
export class PetsProviderService {

  baseUrl: string = `https://api.petfinder.com/v2/`;
  token!: string;

  constructor(private http: HttpClient) { }

  getToken() {
    return this.http
      .post<{ access_token: string }>(
        `${this.baseUrl}oauth2/token`,
        {
          grant_type: 'client_credentials',
          client_id: 'ow9E7hz8GIxETstQFOStB3Vw9hIRu2yZKaSrmCvxnpq8dyxwgT',
          client_secret: 'GFRzBVZWWTe78kI0jFKy9gLSHHEIzbuPGCKTiXW2',
        }
      )
      .pipe(
        tap((obj) => {
          this.token = obj.access_token;
        })
      );
  }

  getPets(){
    return this.http.get<ReturnedObject>(`${this.baseUrl}animals`, 
    {
      headers: {
        Authorization: `Bearer ${this.token}`,
      }
    })
  }
}
