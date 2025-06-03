import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { LoginComponent } from "../../components/login/login.component";
import { ProfileComponent } from "../../components/profile/profile.component";

@Component({
  selector: 'app-home',
  imports: [FormComponent, LoginComponent, ProfileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
