import countries from "./data";
import {count, filter} from "./countries-operations";
import {Country} from "./types";

const run = () => {
    const filterArgument: string | undefined = process.env.npm_config_filter;
    const countArgument: string | undefined = process.env.npm_config_count;

    if (filterArgument) {
        const filteredCountries: Country[] = filter(countries, filterArgument);
        if (filteredCountries.length) {
            console.log(JSON.stringify(filteredCountries));
        }
    } else if (countArgument) {
        console.log(JSON.stringify(count(countries)));
    } else {
        console.log(JSON.stringify(countries));
    }
}

run();