// Declaring the dependencies and variables
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fileName = './dist/README.md';

//Prompt the user questions to populate the README.md
// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Every project must have a title. Please try again.');
                return false;
            }
        }

    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
        default: ''
    },
    {
        type: 'input',
        message: 'How to install your project?',
        name: 'installation',
        default: ''
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
        default: ''
    },
    {
        type: 'input',
        message: 'What are the contributing guidelines?',
        name: 'contribution',
        default: ''
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'tests',
        default: ''
    },
    {
        type: 'list',
        message: 'Please select a type of license.',
        name: 'license',
        choices: [
            'MIT',
            'Apache',
            'Mozilla',
            'GPLv3',
            'Unlicense',
            'Boost', 
            'None'
        ]
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        default: ''
    }
];

// function to write README file
function writeToFile(fileName, data) {
    // Create Markdown from data
    const markdown = generateMarkdown(data);
    // Write Markdown file
    fs.writeFile(fileName, markdown, function (err) {
        if (err) throw err;
        console.log('Success!');
    });
}

// function to initialize program
function init() {
    // inquirer module
    inquirer
     .prompt(questions)
     .then(function(data) {
         writeToFile(fileName,data)
     })
}

// function call to initialize program
init();