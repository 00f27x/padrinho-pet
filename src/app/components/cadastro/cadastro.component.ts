import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Adress } from 'src/app/models/adress';
import { AdressService } from 'src/app/shared/services/adress.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form!: FormGroup;

  adress!: Adress;
  constructor(
    private adressService: AdressService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.adressService.getAdress().subscribe(console.log)

    this.form = this.formBuilder.group({
        nome: ["",Validators.required, Validators.minLength(3)],
        email: ["",Validators.email],
        telefone: ["",Validators.required],
        senha: ["",Validators.required, Validators.minLength(6)],
        confirmacaoDeSenha: ["",Validators.required,],
        endereco: this.formBuilder.group({
          cep: ["",],
          estado: ["", Validators.required],
          cidade: ["",Validators.required] ,
          logradouro: ["",Validators.required],
          numero: ["",],
          complemento: ["",],
        }),
        promoCheck: false,
      }
    );
  }

  verifyCep(){
    this.form.value.endereco.cep.length = 8 ? console.log("aqui"):console.log("aqui tmb");
  }
  onSubmit() {
    console.log("foi");
  }

}
