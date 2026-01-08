import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  formulario = new FormGroup({
    nome: new FormControl("",[Validators.required]),
    email: new FormControl(),
    celular: new FormControl(),
    senha: new FormControl()
  });
  criar(){
    let formValue = this.formulario.value;
    console.log(formValue)
  }
}
