import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Role } from './User';

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
    role: Role;
  };
}

@Component({
  selector: 'app-api-service',
  imports: [],
  standalone: true,
  templateUrl: './api-service.component.html',
  styleUrl: './api-service.component.scss',
})

export class ApiServiceComponent {
  private apiUrl: string = 'https://localhost:8080';

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/login`, credentials);
  }

  register(user: { email: string; name: string; password: string, role: Role}) {
    return this.http.post(`${this.apiUrl}/user/register`, user);
  }
}
