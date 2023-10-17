const inquirer = require('inquirer');

inquirer
    .promt([
        {
            type: 'input',
            name: '', // what property should I add the answer to in the answer object
            message: 'What is your first name?'
        },
        {
            type: 'number',
            name: '', // what property should I add the answer to in the answer object
            message: 'How old are you?'
        },
        {
            type: 'checkbox',
            name: '', // what property should I add the answer to in the answer object
            message: 'What tech skills do you have?',
            choices: ['html', 'css', 'javascript']
        },
        {
            type: 'commMethod',
            name: '', // what property should I add the answer to in the answer object
            message: 'What is your preference for receiving communication?',
            choices: ['text', 'phone call', 'letter']
        }
    ]) 
    .then (function(answer) {
        console.log(answer);
    });