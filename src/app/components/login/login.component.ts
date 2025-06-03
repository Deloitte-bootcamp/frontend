import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiServiceService } from '../../service/api-service.service';


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
        sessionStorage.setItem('user', JSON.stringify(response));
        const userData = {
          id: response.user.id,
          email: response.user.email,
          name: response.user.name,
          role: response.user.role,
        };
      },
      error: (error) => console.error('Login failed', error),
    });
  }
}
