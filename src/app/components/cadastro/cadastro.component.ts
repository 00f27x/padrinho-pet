import { Component, OnInit } from '@angular/core';
import { Adress } from 'src/app/models/adress';
import { AdressService } from 'src/app/shared/services/adress.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  adress!: Adress;
  constructor(private adressService: AdressService) { }

  ngOnInit(): void {
    this.adressService.getAdress().subscribe(console.log);
  }

}
