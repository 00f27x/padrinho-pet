import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  

  constructor(private loginService: LoginService) { }


  onSubmit(){
    this.loginService.passCredentials("tonfa@gmail.com","123123");
  }

  ngOnInit(): void {
  }

}
