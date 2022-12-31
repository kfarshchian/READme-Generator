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
            name: 'installation',
            message: 'What needs to be installed in order to work properly?',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license will this be under?(Use space bar to select license)',
            choices: ['MIT', 'Apache', 'BSD3', 'BSD2', 'Creative Commons Attribution 4.0 International', 'Creative Commons Attribution-ShareAlike 4.0 International', 'Creative Commons Attribution-NonCommercial 4.0 International', 'Creative Commons Attribution-NoDerivates 4.0 International', 'Creative Commons Attribution-NonCommmercial-ShareAlike 4.0 International', 'Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International', 'Eclipse', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'IBM', 'Mozilla', 'Open Data Commons Attribution License (BY)', 'Open Data Commons Open Database License (ODbL)', 'Open Data Commons Public Domain Dedication and License (PDDL)', 'Perl The Perl License', 'Perl The Artistic License 2.0', 'Zlib',],
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
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'what is your Github user name?',
        },
    ]);
};

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((data) => {
        console.log(data);
        return fs.writeFileSync("./README.md", generateMarkdown(data));
      })
      .catch((err) => {
        if (err) {
          throw err;
        }
      });
}

// Function call to initialize app
init();
