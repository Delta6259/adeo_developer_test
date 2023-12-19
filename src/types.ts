export interface Country {
    name: string;
    peoples: People[]
}

export interface People {
    name: string;
    animals: Animal[]
}

export interface Animal {
    name: string;
}