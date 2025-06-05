export enum Role {
    CLIENTE = "ROLE_CLIENTE",
    PROFISSIONAL = "ROLE_PROFISSIONAL",
}
export class User {
    id: number;
    nome: string;
    email: string;
    password: string;
    role_name: Role;

    constructor(id: number, nome: string, email: string, password: string, role: Role) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.password = password;
        this.role_name = Role.CLIENTE;
    }
}
