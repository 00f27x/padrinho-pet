import { PetStatus } from "./PetStatus";

export interface Pet {
    name: string;
    sex: string;
    picture: string; 
    size: string[];
    weight: string;
    tags: string[];
    status: PetStatus[];
}
