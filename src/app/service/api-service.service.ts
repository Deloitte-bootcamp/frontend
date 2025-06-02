import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  apiUrl: string = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post(`${this.apiUrl}/user/register`, user);
  }

  loginUser(user: any) {
    return this.http.post(`${this.apiUrl}/auth/login`, user);
  }
}
