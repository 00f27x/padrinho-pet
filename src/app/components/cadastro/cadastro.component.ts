import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Adress } from 'src/app/models/adress';
import { AdressService } from 'src/app/shared/services/adress.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form!: FormGroup;
  constructor(
    private addressService: AdressService,
    private formBuilder: FormBuilder) { }

  returnedAddress!: Adress;

  ngOnInit(): void {


    this.form = this.formBuilder.group({
      nome: ["", Validators.required, Validators.minLength(3)],
      email: ["", Validators.email],
      telefone: ["", Validators.required],
      senha: ["", Validators.required, Validators.minLength(6)],
      confirmacaoDeSenha: ["", Validators.required,],
      endereco: this.formBuilder.group({
        cep: ["",],
        estado: ["", Validators.required],
        cidade: ["", Validators.required],
        logradouro: ["", Validators.required],
        bairro: ["", Validators.required],
        numero: ["",],
        complemento: ["",],
      }),
      promoCheck: false,
    }
    );
  }

  verifyCep() {
    if (this.form.value.endereco.cep.length == 8) {

      this.addressService.setCep(this.form.value.endereco.cep);

      this.addressService.getAdress().subscribe((value: Adress) => {
        this.returnedAddress = value;
      });

      this.form.patchValue({
        endereco:{
          cidade: this.returnedAddress.localidade,
          estado: this.returnedAddress.uf,
          bairro: this.returnedAddress.bairro,
          logradouro: this.returnedAddress.logradouro
        }
      })
    }


  }
  onSubmit() {
    console.log("foi");
  }

}
