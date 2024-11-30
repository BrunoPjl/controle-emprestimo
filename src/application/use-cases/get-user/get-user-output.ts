
export type GetUserOutput = {
    id: string;
    nameuser: string;
    password: string;
    pessoa: {
        id: string;
        nome: string; // Novo campo
        documento: string; // Novo campo
    };
} 