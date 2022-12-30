// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () =>{ 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is your project name?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe what, why, and how for this project? - What was your motivation? - Why did you build this project? - What problem does it solve? - What did you learn?',
        },
        {
            type: 'input',
            name: 'tableOfContents',
            message: 'for large projects a table of contents is useful. If the project is small you can also add N/A?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What needs to be installed in order to work properly?',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license will this be under?(Use space bar to select license)',
            choices: ['HTML', 'CSS', 'JavaScript', 'MySQL',],
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Who all contributed to this project. If it was only one person N/A can be applied?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the purpose of the project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'what tests have you ran and what was the outcome?',
        },
    ]);
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName, data);
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}



// TODO: Create a function to initialize app
function init() {
    questions()
    .then((data) => {
        console.log(data);
        return fs.writeFileSync("./readme.md", generateMarkdown(data));
      })
      .catch((err) => {
        if (err) {
          throw err;
        }
      });
}

// Function call to initialize app
init();
