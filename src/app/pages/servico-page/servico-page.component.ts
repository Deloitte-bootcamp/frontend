import { Component } from '@angular/core';
import { ServicoFuncionarioComponent } from "../../components/servico-funcionario/servico-funcionario.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servico-page',
  imports: [ServicoFuncionarioComponent, RouterLink],
  standalone: true,
  templateUrl: './servico-page.component.html',
  styleUrl: './servico-page.component.scss'
})
export class ServicoPageComponent {

}
