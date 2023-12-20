import {filter} from "../countries-operations"
import countries from "../data";
import {Country} from "../types";

describe('filter function', () => {
    it('should filter animals with the given pattern', () => {
        expect(filter(countries, "ry")).toEqual([
            {
                name: "Uzuzozne",
                people: [
                    {
                        animals: [
                            {
                                name: "John Dory"
                            }
                        ], name: "Lillie Abbott"
                    }]
            },
            {
                name: "Satanwi",
                people: [
                    {
                        animals: [
                            {
                                name: "Oryx"
                            }
                        ],
                        name: "Anthony Bruno"
                    }
                ]
            }
        ]);
    });

    it('should keep the order of the countries list', () => {
        const filteredCountries: Country[] = filter(countries, "Cat");
        expect(filteredCountries.map(country => country.name)).toStrictEqual([
            "Dillauti",
            "Tohabdal",
            "Uzuzozne",
            "Zuhackog",
            "Satanwi"
        ]);
    });

    it('should return an empty list of country if there is no match', () => {
        expect(filter(countries, "test")).toEqual([]);
    });
});