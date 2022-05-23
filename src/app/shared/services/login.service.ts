import { Injectable, OnInit } from '@angular/core';
import { Administrator, Sponsor } from 'src/app/models/user';
import { UsersProviderService } from './users-provider.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  private sponsor!: Sponsor|number;

  constructor(private usersProvider: UsersProviderService) {} 

  ngOnInit(): void {
    
  }

  passCredentials(email: string, password: string){
    let response = this.usersProvider.checkCredentials(email, password)
    
    if(response == 0){
      console.log("Usuário não encontrado.");
    }else if (response == 1) {
      console.log("Senha incorreta.");
    }else{
      this.sponsor = response;
      console.log(response);
    }

  }
}


