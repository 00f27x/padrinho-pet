import { Pet } from "./pet";

interface User{
    nome: string;
    email: string;
    senha: string;
}

export interface Sponsor extends User{
    pets: Pet[];
    telefone: number;
    endereco: string;
}

export interface Administrator extends User{}