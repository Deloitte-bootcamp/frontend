import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { ServicoPageComponent } from './pages/servico-page/servico-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AgendamentoPageComponent } from './pages/agendamento-page/agendamento-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'servico', component: ServicoPageComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'agendamento', component: AgendamentoPageComponent },
];
