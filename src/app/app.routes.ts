import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicoFuncionarioComponent } from './components/servico-funcionario/servico-funcionario.component';

export const routes: Routes = [
  { path: '', redirectTo: '/geral', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: FormComponent },
  { path: 'geral', component: HomeComponent },
  { path: 'servico', component: ServicoFuncionarioComponent }
];
