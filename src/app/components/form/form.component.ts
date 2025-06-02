import { Component } from '@angular/core';
import { Role } from '../../service/User';
import { ApiServiceService } from '../../service/api-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  role: Role = Role.CLIENTE; 

  protected readonly Role = Role;

  constructor(private apiService: ApiServiceService) {}

  submitForm() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role
    };

    this.apiService.registerUser(user).subscribe({
      next: (response) => console.log('Usuário registrado com sucesso', response),
      error: (error) => console.error('Erro ao registrar usuário', error)
    });
  }
}
