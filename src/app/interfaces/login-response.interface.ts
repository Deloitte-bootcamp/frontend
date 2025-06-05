import { Role } from '../service/User';

export interface LoginResponse {
  token: string;
  message: string;
  user: {
    id: number;
    nome: string;
    email: string;
    role_name: string;
  };
}
