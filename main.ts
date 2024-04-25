#!/usr/bin/env node
// Import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.rgb(9, 255, 182).bold("\n \t<================ Welcome to Word Counter Application ================>\n"));

// Declare a consant 'answer' and assign it to the result of inquirer.prompt function
const answers: {
  Sentence: string;
} = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: chalk.cyanBright("Enter your sentence to count the word: "),
  },
]);

//  Trimming the sentence and splitting it into wors based on "spaces"
const words = answers.Sentence.trim().split(" ");
const array = [];

console.log(chalk.bold("\n- Sentence Words:"));
//Print the array of words to the console
console.log(words);

//Print the word count of the sentence to the console
console.log(
  chalk.whiteBright(`\n- Your sentence word count is ${words.length}`)
);

console.log(
  chalk
    .rgb(255, 4, 255)
    .bold(
      "\n \t<================ thanks for using the App Good Bye ================>\n"
    )
);
