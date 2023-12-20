import {count, filter} from "../countries-operations"
import countries from "./data";
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

describe("count function", () => {
    it("should count and add the number of children to each names", () => {
        const countedCountries: Country[] = count([{
            name: 'Dillauti',
            people: [
                {
                    name: 'Winifred Graham',
                    animals: [
                        {name: 'Anoa'},
                        {name: 'Duck'},
                        {name: 'Narwhal'},
                        {name: 'Badger'},
                        {name: 'Cobra'},
                        {name: 'Crow'}
                    ]
                }
            ]
        }]);

        expect(countedCountries).toEqual([{
            name: 'Dillauti [1]',
            people: [
                {
                    name: 'Winifred Graham [6]',
                    animals: [
                        {name: 'Anoa'},
                        {name: 'Duck'},
                        {name: 'Narwhal'},
                        {name: 'Badger'},
                        {name: 'Cobra'},
                        {name: 'Crow'}
                    ]
                }
            ]
        }])

    });
});