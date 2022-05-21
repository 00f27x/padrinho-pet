import { PetStatus } from "./PetStatus";

export interface Pet {
    name: string;
    sex: string;
    picture: string; 
    size: string[];
    species: string;
    tags: string[];
    status: PetStatus[];
}
