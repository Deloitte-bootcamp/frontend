import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { LoginComponent } from "../../components/login/login.component";

@Component({
  selector: 'app-home',
  imports: [FormComponent, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
