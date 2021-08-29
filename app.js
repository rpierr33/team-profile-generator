const inquirer = require('inquirer');
const fs = require("fs");
const Manager = require('./lib/manager');
const path = require("path");
const generateSite = require('./src/generateSite.js');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }

        }
    ])
}


/*

const questions = [
    {
        type: 'input',
        name: 'title',
        message: `What is the title of your project?`,
    },
    {
        type: 'input',
        name: 'codename',
        message: `What is your name?`,
    },
    {
        type: 'input',
        name: 'github',
        message: `What's your GitHub User Name?`,

    },
    {
        type: 'input',
        name: 'email',
        message: `What's your email address?`,
        validate: function (value) {
            let pass = value.match(
                /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            );
            if (pass) {
                return true;
            }
            return 'Please enter a valid email address!';
        },
    },
    {
        type: 'input',
        name: 'description',
        message: `Please write a description of your project`,

    },
    {
        type: 'confirm',
        name: 'install',
        message: `Do you want to add any installation notes?`,

    },
    {
        type: 'input',
        name: 'installNotes',
        message: `Please add your installation notes`,
        when: function (answers) {
            return answers.install;
        }
    },
    {
        type: 'confirm',
        name: 'usage',
        message: `Do you want to provide the user usage information?`,
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: `Please add your usage info`,
        when: function (answers) {
            return answers.usage;
        }
    },
   
    {
        type: 'rawlist',
        name: 'license',
        message: 'Which open source license would you like to use? ',
        choices: ['Apache 2.0', 'MIT', 'Mozilla Public 2.0'],
    },
    {
        type: 'confirm',
        name: 'credits',
        message: `Would you like to add any credits to the repo?`,
    },
    {
        type: 'input',
        name: 'creditData',
        message: `Please add your credits`,
        when: function (answers) {
            return answers.credits;
        }
    },

];


*/