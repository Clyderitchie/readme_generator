// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
            {
                type: 'input',
                name: 'title',
                message: 'What is your project\'s name?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please write a short description of your project',
                
            },
            {
                type: 'list',
                name: 'license',
                message: 'What kind of license should your project have?',
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What command should be run to install dependencies?',
                default: 'npm i',
            },
            {
                type: 'input',
                name: 'test',
                message: 'What command should be run to run tests?',
                default: 'npm test',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Provide usage instructions'
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'If contributing is allowed, how does one contribute',
                default: 'Fork the project and create a pull request with your new code',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your github username?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?'
            }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        fs.writeFile('./dist/README.md', generateMarkdown(data), err => {
            if (err) return err;

            console.log('Success! Your file is located in the dist folder!')
        })
    });
}

// Function call to initialize app
init();
