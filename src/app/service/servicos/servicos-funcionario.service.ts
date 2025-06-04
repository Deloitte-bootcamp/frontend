import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ServicoDTO {
  // Defina os campos conforme o seu backend
  id?: number;
  nome: string;
  descricao: string;
  // ... outros campos necessários
}

@Injectable({
  providedIn: 'root',
})
export class ServicosFuncionarioService {
  private apiUrl = 'http://localhost:8080'; // ajuste se necessário

  constructor(private http: HttpClient) {}

  criarServico(usuarioId: number, dto: ServicoDTO): Observable<ServicoDTO> {
    return this.http.post<ServicoDTO>(
      `${this.apiUrl}/profissional/${usuarioId}`,
      dto
    );
  }
}
