export interface Country {
    name: string;
    people: People[]
}

export interface People {
    name: string;
    animals: Animal[]
}

export interface Animal {
    name: string;
}