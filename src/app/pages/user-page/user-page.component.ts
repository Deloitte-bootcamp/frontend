import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../../components/profile/profile.component';
import { AuthService } from '../../service/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { Role } from '../../service/User';

@Component({
  selector: 'app-user-page',
  imports: [CommonModule, ProfileComponent, RouterLink],
  standalone: true,
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
})
export class UserPageComponent implements OnInit {
  userRole: Role | null = null;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.currentUser.subscribe((user) => {
      console.log('Usuário atualizado:', user);
      if (user) {
        this.userRole = user.role_name;
      } else {
        this.userRole = null;
      }
    });
  }

  ngOnInit(): void {
    const sessionUser = sessionStorage.getItem('user');
    if (sessionUser) {
      const userData = JSON.parse(sessionUser);
      this.userRole = userData.role_name;
      console.log('Role carregada do sessionStorage:', this.userRole);
    }
  }

  isCliente(): boolean {
    return this.userRole === Role.CLIENTE;
  }

  isProfissional(): boolean {
    return this.userRole === Role.PROFISSIONAL;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
