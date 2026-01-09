import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from '../interfaces/usuario.interface';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  formulario = new FormGroup({
    id: new FormControl(),
    nome: new FormControl("",[Validators.required]),
    email: new FormControl(),
    celular: new FormControl(),
    senha: new FormControl()
  });

  usuarios: Usuario[] = [];

  criar(){
    let formValue = this.formulario.value;
    console.log(formValue);

    if(this.formulario.invalid){
      return;
    }

    this.usuarios.push({
      id:formValue.id,
      nome:formValue.nome!,
      email:formValue.email!,
      celular:formValue.celular!,
      senha:formValue.senha
    })
    this.formulario.reset();
  }

  excluir(id: number){
    this.usuarios = this.usuarios.filter(u => u.id !== id);
  }

}
