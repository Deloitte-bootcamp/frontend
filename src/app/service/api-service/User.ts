export enum Role {
  ROLE_CLIENTE = 'ROLE_CLIENTE',
  ROLE_PROFESSIONAL = 'ROLE_PROFESSIONAL',
}

export class User {
  id: number;
  email: string;
  name: string;
  role: Role;
  resetToken: string;
  resetTokenExpiration: Date;

  constructor(id: number, email: string, name: string, role: string, resetToken: string, resetTokenExpiration: Date) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.role = Role[role as keyof typeof Role];
    this.resetToken = resetToken;
    this.resetTokenExpiration = resetTokenExpiration;
  }
}
