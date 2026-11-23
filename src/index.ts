import { select } from "@inquirer/prompts"

import { unitConverter } from "./task-01"
import { bmiCalculator } from "./task-02"
import {discountCalculator} from "./task-03"

const program = await select({
    message: "Pilih Program:",
    choices: [
        { name: "Unit Converter", value: "unit" },
        { name: "BMI Calculator", value: "bmi" },
        { name: "Discount Calculator", value: "discount" }
        ]
});
if (program === "unit") {
    await unitConverter();
}else if (program === "bmi") {
    await bmiCalculator();
} else if(program === "discount"){
    await discountCalculator();
}