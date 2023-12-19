import {Country} from "./types";
import countries from "./data";

const run = () => {
    if (process.env.npm_config_filter) {
        console.log(JSON.stringify(countries));
    } else if (process.env.npm_config_count) {
        console.log(JSON.stringify(countries));
    } else {
        console.log(JSON.stringify(countries));
    }
}

run();