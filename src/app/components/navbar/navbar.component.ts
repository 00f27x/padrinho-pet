import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sponsor } from 'src/app/models/user';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  response!: string | number;
  formLogin!: FormGroup;
  loggedIn: boolean = false;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder) { }


  onSubmit() {
    this.response = this.loginService.passCredentials(this.formLogin.value.email, this.formLogin.value.password);

    if (this.response == 3) {
      console.log("Usuário não encontrado.");
    } else if (this.response == 2) {
      console.log("Senha incorreta.");
    }else{
      console.log(this.response)
      this.loggedIn = true;
    }
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    })
  }

}
