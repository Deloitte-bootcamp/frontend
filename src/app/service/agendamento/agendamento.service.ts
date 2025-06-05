import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AgendamentoDTO } from '../../interfaces/agendamento.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AgendamentoService {
  private apiUrl = `${environment.apiUrl}/agendamentos`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  criarAgendamento(dto: AgendamentoDTO): Observable<AgendamentoDTO> {
    const token = this.authService.getToken();

    if (!token) {
      throw new Error('Usuário não autenticado');
    }

    console.log('[AgendamentoService] Criando agendamento:', dto);

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json');

    return this.http.post<AgendamentoDTO>(this.apiUrl, dto, { headers });
  }

  // Método para listar agendamentos do cliente logado
  listarMeusAgendamentos(): Observable<AgendamentoDTO[]> {
    const token = this.authService.getToken();

    if (!token) {
      throw new Error('Usuário não autenticado');
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json');

    return this.http.get<AgendamentoDTO[]>(`${this.apiUrl}/meus-agendamentos`, {
      headers,
    });
  }

  // Método para listar agendamentos do profissional
  listarAgendamentosProfissional(): Observable<AgendamentoDTO[]> {
    const token = this.authService.getToken();

    if (!token) {
      throw new Error('Usuário não autenticado');
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json');

    return this.http.get<AgendamentoDTO[]>(`${this.apiUrl}/profissional`, {
      headers,
    });
  }
}
