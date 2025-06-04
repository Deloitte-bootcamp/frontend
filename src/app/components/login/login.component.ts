import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importar o Router
import { ApiServiceService } from '../../service/api-service/api-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private apiService: ApiServiceService,
    private router: Router // Injetar o Router
  ) {}

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
          role_name: response.user.roleName,
        };

        const token = response.token;
        sessionStorage.setItem('user', JSON.stringify(userData));
        sessionStorage.setItem('token', token);
        this.router.navigate(['/user']);
      },
      error: (error) => console.error('Login failed', error),
    });
  }
}
