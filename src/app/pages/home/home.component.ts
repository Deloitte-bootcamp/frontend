import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { LoginComponent } from '../../components/login/login.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormComponent, LoginComponent, ProfileComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
