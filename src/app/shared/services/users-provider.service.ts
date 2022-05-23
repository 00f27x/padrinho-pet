import { Injectable } from '@angular/core';
import { Sponsor } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersProviderService {

  constructor() { }

  private sponsors: Sponsor[] = [{
    name: "Abelardo Miloto",
    email: "bebel@gmail.com",
    password: "iloveburiti",
    phone: 8135654784,
    address: {
      cep: "52636547",
      logradouro: "Rua do Jamelão",
      bairro: "Morro do Corcunda",
      localidade: "Plantinhas",
      uf: "PE"
    }
  },
  {
    name: "Atônio Falisca",
    email: "tonfa@gmail.com",
    password: "123123",
    phone: 8135654784,
    address: {
      cep: "52636547",
      logradouro: "Rua do Jamelão",
      bairro: "Morro do Corcunda",
      localidade: "Plantinhas",
      uf: "PE"
    }
  },
  {
    name: "Raquelen Zizerê",
    email: "ranzinza@gmail.com",
    password: "18102000",
    phone: 8135654784,
    address: {
      cep: "52636547",
      logradouro: "Rua do Jamelão",
      bairro: "Morro do Corcunda",
      localidade: "Plantinhas",
      uf: "PE"
    }
  },
  {
    name: "Alana Matutitna Feioso",
    email: "alanatech@gmail.com",
    password: "alanlan",
    phone: 8135654784,
    address: {
      cep: "52636547",
      logradouro: "Rua do Jamelão",
      bairro: "Morro do Corcunda",
      localidade: "Plantinhas",
      uf: "PE"
    }
  },
  {
    name: "Solange Fino",
    email: "sol.fino@gmail.com",
    password: "sol.grosso",
    phone: 8135654784,
    address: {
      cep: "52636547",
      logradouro: "Rua do Jamelão",
      bairro: "Morro do Corcunda",
      localidade: "Plantinhas",
      uf: "PE"
    }
  },
  {
    name: "Amaro de Freitas",
    email: "amaro.ogato2013@gmail.com",
    password: "amorsodemae",
    phone: 8135654784,
    address: {
      cep: "52636547",
      logradouro: "Rua do Jamelão",
      bairro: "Morro do Corcunda",
      localidade: "Plantinhas",
      uf: "PE"
    }
  },
  {
    name: "Peregrin Tuk",
    email: "p.tuk@gmail.com",
    password: "shire123",
    phone: 8135654784,
    address: {
      cep: "52636547",
      logradouro: "Rua do Jamelão",
      bairro: "Morro do Corcunda",
      localidade: "Plantinhas",
      uf: "PE"
    }
  },
  {
    name: "Justa Correia",
    email: "bebel@gmail.com",
    password: "iloveburiti",
    phone: 8135654784,
    address: {
      cep: "52636547",
      logradouro: "Rua do Jamelão",
      bairro: "Morro do Corcunda",
      localidade: "Plantinhas",
      uf: "PE"
    }
  },
  {
    name: "Rejane Tosquinha",
    email: "bebel@gmail.com",
    password: "iloveburiti",
    phone: 8135654784,
    address: {
      cep: "52636547",
      logradouro: "Rua do Jamelão",
      bairro: "Morro do Corcunda",
      localidade: "Plantinhas",
      uf: "PE"
    }
  },
  {
    name: "Marco Vilaça",
    email: "bebel@gmail.com",
    password: "iloveburiti",
    phone: 8135654784,
    address: {
      cep: "52636547",
      logradouro: "Rua do Jamelão",
      bairro: "Morro do Corcunda",
      localidade: "Plantinhas",
      uf: "PE"
    }
  },

  ];

  checkCredentials(email: string, password: string): number | Sponsor{
    console.log(email)
    for (const sponsor of this.sponsors) {
      if(sponsor.email == email){
        if(sponsor.password == password){
          return sponsor;
        }else{
          return 1;
        }
      } 
    }
    return 0;
  }
}
