import {Country} from "./types";

export const filter = (countries: Country[], pattern: string): Country[] => {
    return countries
        .map((country) => {
            return {
                ...country,
                people: country.people.map(p => {
                    return {
                        ...p,
                        animals: p.animals.filter(animal => animal.name.includes(pattern))
                    }
                }).filter(p => p.animals.length)
            }
        })
        .filter(c => c.people.length)
};