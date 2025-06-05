import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AgendamentoComponentComponent } from '../../components/agendamento-component/agendamento-component.component';

@Component({
  selector: 'app-agendamento-page',
  standalone: true,
  imports: [CommonModule, RouterLink, AgendamentoComponentComponent],
  templateUrl: './agendamento-page.component.html',
  styleUrl: './agendamento-page.component.scss'
})
export class AgendamentoPageComponent {

}
