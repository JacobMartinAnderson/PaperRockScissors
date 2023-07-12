import inquirer from "inquirer";

const questions = [
    {
        type: "input",
        name: "choice",
        message: "question"

    }
];

// inquirer.prompt(questions).then(answers => {
    // console.log(answers.choice);
// });

const choices = ["paper","rock","scissors"];

console.log(Math.random());