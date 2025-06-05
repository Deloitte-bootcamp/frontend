import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgendamentoService } from '../../service/agendamento/agendamento.service';
import {
  AgendamentoDTO,
  AgendamentoStatus,
} from '../../interfaces/agendamento.interface';

@Component({
  selector: 'app-agendamento-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agendamento-component.component.html',
  styleUrl: './agendamento-component.component.scss',
})
export class AgendamentoComponentComponent {
  profissionalEmail = '';
  servicoId: number = 0;
  data = '';
  horaInicio = '';
  horaFim = '';
  mensagem = '';
  mensagemTipo: 'sucesso' | 'erro' = 'sucesso';

  constructor(private agendamentoService: AgendamentoService) {}

  criarAgendamento() {
    const userData = JSON.parse(sessionStorage.getItem('user') || '{}');

    if (!userData.id) {
      this.mensagem = 'Usuário não encontrado ou não está logado!';
      this.mensagemTipo = 'erro';
      return;
    }

    if (!this.validarFormulario()) {
      return;
    }

    const dto: AgendamentoDTO = {
      profissionalEmail: this.profissionalEmail,
      servicoId: this.servicoId,
      data: this.data,
      horaInicio: this.horaInicio,
      horaFim: this.horaFim,
    };

    console.log('Enviando agendamento:', dto);

    this.agendamentoService.criarAgendamento(dto).subscribe({
      next: (response) => {
        this.mensagem = 'Agendamento realizado com sucesso!';
        this.mensagemTipo = 'sucesso';
        this.limparFormulario();
      },
      error: (err) => {
        this.mensagem =
          'Erro ao realizar agendamento: ' +
          (err.error?.message || err.message);
        this.mensagemTipo = 'erro';
        console.error('Erro:', err);
      },
    });
  }

  private validarFormulario(): boolean {
    if (!this.profissionalEmail) {
      this.mensagem = 'Email do profissional é obrigatório';
      this.mensagemTipo = 'erro';
      return false;
    }

    if (!this.servicoId) {
      this.mensagem = 'Serviço é obrigatório';
      this.mensagemTipo = 'erro';
      return false;
    }

    if (!this.data) {
      this.mensagem = 'Data é obrigatória';
      this.mensagemTipo = 'erro';
      return false;
    }

    if (!this.horaInicio) {
      this.mensagem = 'Hora de início é obrigatória';
      this.mensagemTipo = 'erro';
      return false;
    }

    if (!this.horaFim) {
      this.mensagem = 'Hora de término é obrigatória';
      this.mensagemTipo = 'erro';
      return false;
    }

    return true;
  }

  private limparFormulario() {
    this.profissionalEmail = '';
    this.servicoId = 0;
    this.data = '';
    this.horaInicio = '';
    this.horaFim = '';
  }
}
