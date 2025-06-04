import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Role, User } from '../User';
import { LoginResponse } from '../../interfaces/login-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  constructor() {
    const userData = this.getUserFromStorage();
    this.currentUserSubject = new BehaviorSubject<User | null>(userData);
    this.currentUser = this.currentUserSubject.asObservable();

    // Se houver dados no sessionStorage mas não no BehaviorSubject, recarregar
    if (!this.currentUserSubject.value && userData) {
      this.currentUserSubject.next(userData);
    }
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  private getUserFromStorage(): User | null {
    const userData = sessionStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }

  setUserData(loginResponse: LoginResponse): void {
    console.log('Login response:', loginResponse);
    const userData: User = {
      id: loginResponse.user.id,
      nome: loginResponse.user.nome,
      email: loginResponse.user.email,
      role_name: loginResponse.user.role_name as Role,
      password: '',
    };

    console.log('User data mapped:', userData);

    sessionStorage.setItem('token', loginResponse.token);

    sessionStorage.setItem('user', JSON.stringify(userData));
    this.currentUserSubject.next(userData);
  }

  logout(): void {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.currentUserValue;
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }
}
