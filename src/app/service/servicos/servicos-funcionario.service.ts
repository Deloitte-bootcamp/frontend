import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ServicoDTO {
  id?: number;
  nome: string;
  descricao: string;
  preco: number;
  duracao: number;
  profissionalId?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ServicosFuncionarioService {
  private apiUrl = 'http://localhost:8080/servicos';

  constructor(private http: HttpClient) {}

  criarServico(usuarioId: number, dto: ServicoDTO): Observable<ServicoDTO> {
    return this.http.post<ServicoDTO>(
      `${this.apiUrl}/profissional/${usuarioId}`,
      dto
    );
  }
}
