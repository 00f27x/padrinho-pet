import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/models/address';
import { LocatorService } from 'src/app/shared/services/locator.service';
import { NewRegisterService } from 'src/app/shared/services/new-register.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form!: FormGroup;
  address!: Address;

  constructor(private addressService: LocatorService, private formBuilder: FormBuilder, private register:NewRegisterService) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      nome: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.email]],
      telefone: ["", Validators.required],
      senha: ["", [Validators.required, Validators.minLength(6)]],
      confirmacaoDeSenha: ["", Validators.required],
      endereco: this.formBuilder.group({
        cep: ["", Validators.required],
        estado: ["", Validators.required],
        cidade: ["", Validators.required],
        logradouro: ["", Validators.required],
        bairro: ["", Validators.required],
        numero: ["",],
        complemento: ["",],
      }),
      promoCheck: false,
    });
  }

  verifyCep(event: any) {
   
    if (event.target.value.length == 8) {

      this.addressService.setCep(event.target.value);

      this.addressService.getAddress().subscribe((value: Address) => {
        this.address = value;

        this.form.patchValue({
          endereco:{
            cidade: this.address.localidade,
            estado: this.address.uf,
            bairro: this.address.bairro,
            logradouro: this.address.logradouro          
          }
        })
      });
      
      
    }
  }
onSubmit(){
  if(this.form.valid){
    this.register.register(this.form.value); 
    return alert("Efetuado com sucesso!");
    }
  }

}
