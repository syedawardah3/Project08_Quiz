#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const user = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.greenBright.bold("What's your name?")
    },
]);
console.log(chalk.yellowBright.underline(`\t\tWelcome ${user.name} to the TypeScript Quiz!`));
console.log(chalk.yellowBright.underline("\t\tPlease answer the following questions to the best of your ability."));
console.log(chalk.yellowBright.underline("\t\tLet's start the quiz!"));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: chalk.blueBright.bold("Q1.What is the file extension for TypeScript files?"),
        choices: [".js", ".ts", ".html", ".css"] // .ts
    },
    {
        name: "question_2",
        type: "list",
        message: chalk.blueBright.bold("Q2.TypeScript code is compiled into:"),
        choices: ["Machine code", "Assembly code", "JavaScript", "TypeScript bytecode"] // Javascript
    },
    {
        name: "question_3",
        type: "list",
        message: chalk.blueBright.bold("Q3.Which tool is commonly used to transpile TypeScript code to JavaScript?"),
        choices: ["Babel", "Webpack", "TypeScript Compiler (tsc)", "Node.js"] // TypeScript Compiler (tsc)
    },
    {
        name: "question_4",
        type: "list",
        message: chalk.blueBright.bold("Q4.Which of these are supported in TypeScript?"),
        choices: ["Number", "Integar", "Any", "Both A and C", "All of the above"] // Both A and C
    },
    {
        name: "question_5",
        type: "list",
        message: chalk.blueBright.bold("Q5.Consider the code (let age = 25;). What is the data type of the variable age?"),
        choices: ["Number", "Any", "String", "boolean"] // Number
    },
    {
        name: "question_6",
        type: "list",
        message: chalk.blueBright.bold("Q6.Consider the code (let myName= 'kanwal bilal';). What is the data type of the variable myName? "),
        choices: ["Number", "Any", "String", "boolean"] // string
    },
    {
        name: "question_7",
        type: "list",
        message: chalk.blueBright.bold("Q7.Consider the code (let isMarried = true;). What is the data type of the variable isMarried? "),
        choices: ["Number", "Any", "String", "boolean"] // boolean
    },
    {
        name: "question_8",
        type: "list",
        message: chalk.blueBright.bold("Q8.Typescript is the superset of? "),
        choices: ["python", "javaScript", "nextjs", "c++"] // javascript
    },
    {
        name: "question_9",
        type: "list",
        message: chalk.blueBright.bold("Q9.What are the three main 'simple types' in TypeScript? "),
        choices: ["Array,Object,Boolean", "Object,Array,Symbol", "Object,String,Number", "String,Number,Boolean"] // string,number,boolean
    },
    {
        name: "question_10",
        type: "list",
        message: chalk.blueBright.bold("Q10.TypeScript can always correctly infer a variables type? "),
        choices: ["true", "false", "yes", "no"] // Number
    },
]);
let score = 0;
switch (quiz.question_1) {
    case ".ts":
        console.log(chalk.redBright.bold("\t\t1. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magentaBright.bold("\t\t1. Incorrect!"));
}
switch (quiz.question_2) {
    case "JavaScript":
        console.log(chalk.redBright.bold("\t\t2. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magentaBright.bold("\t\t2. Incorrect!"));
}
switch (quiz.question_3) {
    case "TypeScript Compiler (tsc)":
        console.log(chalk.redBright.bold("\t\t3. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magentaBright.bold("\t\t3. Incorrect!"));
}
switch (quiz.question_4) {
    case "Both A and C":
        console.log(chalk.redBright.bold("\t\t4. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magentaBright.bold("\t\t4. Incorrect!"));
}
switch (quiz.question_5) {
    case "Number":
        console.log(chalk.redBright.bold("\t\t5. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magentaBright.bold("\t\t5. Incorrect!"));
}
switch (quiz.question_6) {
    case "String":
        console.log(chalk.redBright.bold("\t\t6. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magentaBright.bold("\t\t6. Incorrect!"));
}
switch (quiz.question_7) {
    case "boolean":
        console.log(chalk.redBright.bold("\t\t7. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magentaBright.bold("\t\t7. Incorrect!"));
}
switch (quiz.question_8) {
    case "javaScript":
        console.log(chalk.redBright.bold("\t\t8. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magentaBright.bold("\t\t8. Incorrect!"));
}
switch (quiz.question_9) {
    case "String,Number,Boolean":
        console.log(chalk.redBright.bold("\t\t9. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magentaBright.bold("\t\t9. Incorrect!"));
}
switch (quiz.question_10) {
    case "false":
        console.log(chalk.redBright.bold("\t\t10. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magentaBright.bold("\t\t10. Incorrect!"));
}
console.log(chalk.yellowBright.bold.underline(`\t\t${user.name} Your score is ${score}/10`));
console.log(chalk.redBright.bgWhiteBright.bold("\t\tThank you for taking the quiz!"));
