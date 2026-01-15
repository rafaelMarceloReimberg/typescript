import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from '../interfaces/usuario.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})

export class Cadastro implements OnInit {
  
  usuarios: WritableSignal<Usuario[]> = signal([]);
  
  formulario = new FormGroup({
    id: new FormControl(),
    nome: new FormControl("",[Validators.required]),
    email: new FormControl(),
    celular: new FormControl(),
    senha: new FormControl()
  });


  private readonly API_URL =
    'https://api.etternum.com.br/integracao/Usuario?$select=id,nome,email';

  private readonly TOKEN =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIgUkVJTUJFUkciLCJqdGkiOiJhOTVkMzMwZi0xYTRiLTQ2YTMtYjVjMC0wZWI5YzlhZjBiY2IiLCJPcmdhbml6YWNhb0lkIjoiMTk3OCIsIlVzZXJJZCI6IjAiLCJleHAiOjE3Njg1MzI5NjYsImlzcyI6Ik1lZGljaW5hRGlyZXRhLkFQSSIsImF1ZCI6Ik1lZGljaW5hRGlyZXRhLkFQSSJ9.68FwtoLDI94xB4vkMvGl4ret7LfoCnJJ-IOTgvIrh2Y';

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
        this.buscarUsuarios();
  }

  buscarUsuarios(): void{
    const headers = new HttpHeaders({
      Authorization: this.TOKEN
    });

    this.http.get<{ value: any[] }>(this.API_URL, { headers}).subscribe({
      next: (res) => {
        this.usuarios.set(res.value);

        console.log(this.usuarios);
      },
      error: (err) => {
        console.error('Erro ao buscar usuários', err);
      }
    });
  }

  

  // 🔹 POST LOCAL (simulação de cadastro)
  criar(): void {
    if (this.formulario.invalid) {
      return;
    }
 
    const dados = this.formulario.getRawValue();
 
    this.usuarios().push({
      id: dados.id ?? Date.now(),
      nome: dados.nome!,
      email: dados.email!,
      celular: dados.celular!,
      senha: dados.senha!
    });
 
    this.formulario.reset();
  }
 
  // 🔹 DELETE LOCAL
  excluir(id: number): void {
    let usuarios = this.usuarios().filter(u => u.id !== id);
    this.usuarios.set(usuarios);
  }
}

