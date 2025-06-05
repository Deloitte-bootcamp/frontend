import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ServicoDTO,
  ServicosFuncionarioService,
} from '../../service/servicos/servicos-funcionario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servico-funcionario',
  standalone: true,
  imports: [CommonModule, FormsModule, CommonModule],
  templateUrl: './servico-funcionario.component.html',
  styleUrl: './servico-funcionario.component.scss',
})
export class ServicoFuncionarioComponent {
  emailFuncionario = '';
  nomeServico = '';
  descricaoServico = '';
  precoServico = 0;
  duracaoServico = 0;
  mensagem = '';

  constructor(private servicosFuncionarioService: ServicosFuncionarioService) {}

  cadastrarServico() {
    const userData = JSON.parse(sessionStorage.getItem('user') || '{}');

    if (!userData.id) {
      this.mensagem = 'Usuário não encontrado ou não está logado!';
      return;
    }

    const dto: ServicoDTO = {
      nome: this.nomeServico,
      descricao: this.descricaoServico,
      preco: this.precoServico,
      duracao: this.duracaoServico,
    };

    this.servicosFuncionarioService.criarServico(userData.id, dto).subscribe({
      next: (response) => {
        this.mensagem = 'Serviço cadastrado com sucesso!';
        this.limparFormulario();
      },
      error: (err) => {
        if (err.status === 403) {
          this.mensagem = 'Apenas profissionais podem cadastrar serviços!';
        } else {
          this.mensagem =
            'Erro ao cadastrar serviço: ' + (err.error || err.message);
        }
        console.error('Erro:', err);
      },
    });
  }

  private limparFormulario() {
    this.nomeServico = '';
    this.descricaoServico = '';
    this.precoServico = 0;
    this.duracaoServico = 0;
  }
}
