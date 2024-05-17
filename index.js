#!/usr/bin/env node
import inquirer from "inquirer";
//(1)computer will generate a random number 
const randomNumber = Math.floor(Math.random() * 10 + 1);
//console.log(randomNumber);
//(2) user will enter a number
for (let i = 0; i < 10; i++) {
    const answers = await inquirer.prompt([
        {
            name: "usernumber",
            type: "number",
            message: "enter a number between 1 and 10",
        }
    ]);
    console.log(answers);
    //(3)cpmpare with user input and computers number
    if (answers.usernumber === randomNumber) {
        console.log("your number is correct");
        process.exit();
    }
    else {
        console.log("your number is incorrect");
    }
}
