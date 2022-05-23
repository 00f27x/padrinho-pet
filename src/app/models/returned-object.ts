import { Pet } from "./pet";

export interface ReturnedObject {
    animals: Pet[],
    pagination: {
        count_per_page: number,
        current_page: number,
        total_count: number,
        total_pages: number
    },
    _links: {
        next:{
            href: string
        }
    }
}
