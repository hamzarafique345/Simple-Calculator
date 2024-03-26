#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter Please Firat Number", type: "number", name: "firstnumber" },
    { message: "Enter Please Second Number", type: "number", name: "secondnumber" },
    {
        message: "select one operator to perform operation",
        name: "operator",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);
console.log(answer);
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("PLEASE ENTER VALID NUMBER");
}
