import { Injectable } from '@angular/core';
import { Sponsor } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class NewRegisterService {


  private records: Sponsor [] = [];

  register (user:Sponsor){
    this.records.push(user);
    console.log(this.records);
  }

}