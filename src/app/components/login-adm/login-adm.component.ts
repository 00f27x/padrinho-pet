import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login-adm.component.html',
  styleUrls: ['./login-adm.component.css']
})
export class LoginComponent implements OnInit {

  email:string = '';
  senha:string = '';

  onSubmit(){
    alert(`Bem-vindo ${this.email}`);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
