import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiServiceService } from '../../service/api-service.service';

export interface User {
  id: number;
  nome: string;
  email: string;
  role_name: string;
}


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private apiService: ApiServiceService) {}

  login() {
  const credentials = {
    email: this.email,
    password: this.password,
  };

  this.apiService.loginUser(credentials).subscribe({
    next: (response: any) => {
      console.log('Login successful', response);
      const userData = {
        id: response.user.id,
        nome: response.user.nome,
        email: response.user.email,
        role_name: response.user.roleName 
      };
      sessionStorage.setItem('user', JSON.stringify(userData));
    },
    error: (error) => console.error('Login failed', error),
  });
}
}
