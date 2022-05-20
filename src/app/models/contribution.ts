import { Pet } from "./pet";
import { ContributionStatus } from "./status";
import { Sponsor } from "./user";

export interface Contribution {
    sponsor: Sponsor;
    pet: Pet;
}
    
export interface MonthlyContribution extends Contribution{
    status: ContributionStatus; 
}