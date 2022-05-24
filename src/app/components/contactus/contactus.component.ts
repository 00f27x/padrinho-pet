import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  nome:string = '';
  email:string='';
  assunto:string='';
  mensagem:string='';

  onSubmit(){
    alert(`Mensagem enviada com sucesso, obrigada!  ${this.nome}`);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
