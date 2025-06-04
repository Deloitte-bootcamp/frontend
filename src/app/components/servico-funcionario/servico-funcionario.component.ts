import { Component } from '@angular/core';
import {
  ServicosFuncionarioService,
  ServicoDTO,
} from '../../service/servicos/servicos-funcionario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servico-funcionario',
  templateUrl: './servico-funcionario.component.html',
  styleUrls: ['./servico-funcionario.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class ServicoFuncionarioComponent {
  emailFuncionario = '';
  nomeServico = '';
  descricaoServico = '';
  mensagem = '';

  constructor(private servicosFuncionarioService: ServicosFuncionarioService) {}

  cadastrarServico() {
    const dto: ServicoDTO = {
      nome: this.nomeServico,
      descricao: this.descricaoServico,
    };
    this.mensagem = 'Serviço cadastrado com sucesso!';
  }
}
