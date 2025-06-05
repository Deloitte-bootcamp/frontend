export enum AgendamentoStatus {
  AGENDADO = 'AGENDADO',
  CONFIRMADO = 'CONFIRMADO',
  CONCLUIDO = 'CONCLUIDO',
  CANCELADO = 'CANCELADO',
}

export interface AgendamentoDTO {
  id?: number;
  clienteId?: number;
  profissionalEmail: string;
  servicoId: number;
  data: string; // LocalDate será enviado como string no formato ISO
  horaInicio: string; // LocalTime será enviado como string no formato HH:mm
  horaFim: string; // LocalTime será enviado como string no formato HH:mm
  status?: AgendamentoStatus;
}
