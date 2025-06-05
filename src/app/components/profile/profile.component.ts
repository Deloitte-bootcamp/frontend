import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth/auth.service';
import { User } from '../../service/User';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  currentUser: User | null = null;
  nome: string = '';
  email: string = '';
  role_name: string = '';

  constructor(private authService: AuthService) {}
  ngOnInit() {
    const storedUser = this.authService.currentUserValue;
    if (storedUser) {
      this.setUserData(storedUser);
    } else {
      const sessionUser = sessionStorage.getItem('user');
      if (sessionUser) {
        const userData = JSON.parse(sessionUser);
        this.authService['currentUserSubject'].next(userData);
        this.setUserData(userData);
      }
    }

    this.authService.currentUser.subscribe((user) => {
      console.log('User data received:', user);
      if (user) {
        this.setUserData(user);
      }
    });
  }

  private setUserData(user: User): void {
    this.currentUser = user;
    this.nome = user.nome;
    this.email = user.email;
    this.role_name = user.role_name;
    console.log('User data set:', {
      nome: this.nome,
      email: this.email,
      role_name: this.role_name,
    });
  }

  getUserDetails(): void {
    console.log('Current user in component:', this.currentUser);
  }
}
