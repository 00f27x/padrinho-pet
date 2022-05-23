export interface Pet {
    name: string;
    gender: string;
    primary_photo_cropped: {
        small: string;
    };
    size: string[];
    description: string;
    species: string;
    tags: string[];
    status: string[];
}
