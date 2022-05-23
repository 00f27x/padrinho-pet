import { Address } from "./address";
import { Pet } from "./pet";

interface User{
    name: string;
    email: string;
    password: string;
}

export interface Sponsor extends User{
    pets?: Pet[];
    phone: number;
    address: Address;
}

export interface Administrator extends User{}