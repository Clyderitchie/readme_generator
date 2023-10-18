// Example prompt
// const inquirer = require('inquirer');

// inquirer
//     .prompt([
//         {
//             type: 'input',
//             message: 'What is your name?',
//             name: 'fullName'
//         },
//         {
//             type: 'list',
//             message: 'What languages do you know?',
//             name: 'languages',
//             choices: ['html', 'css', 'javascript', 'react', 'node']
//         },
//         {
//             type: 'list',
//             message: 'What is your preferred method of communication?',
//             name: 'commMethod',
//             choices: ['text', 'phone call', 'email', 'letter']
//         },
//     ])
//     .then(function(answer){
//         console.log(answer);
//     })

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
        ([
            {
                type: 'input',
                message: 'What is your project\'s name?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'Please write a short description of your project',
                name: 'description'
            },
            {
                type: 'list',
                message: 'What kind of license should your project have?',
                name: 'license',
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

        ])
        (function(answer){
            console.log(answer);
        })
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answer => {
        fs.writeFile('README.md', generateMarkdown(data), (err) => {
            if (err) {
                console.error(err)
            }

            console.log('Success! Your file is located in the dist folder!')
        })
    });
}

// Function call to initialize app
init();
