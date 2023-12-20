import countries from "./data";
import {count, filter} from "./countries-operations";

const run = () => {
    const filterArgument: string | undefined = process.env.npm_config_filter;
    const countArgument: string | undefined = process.env.npm_config_count;

    if (filterArgument) {
        console.log(JSON.stringify(filter(countries, filterArgument)));
    } else if (countArgument) {
        console.log(JSON.stringify(count(countries)));
    } else {
        console.log(JSON.stringify(countries));
    }
}

run();