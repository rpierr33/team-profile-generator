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

        },

        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your employee ID? (Required)',
            validate: (employeeId) => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }

        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: (email) => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number (Required)',
            validate: (officeNumber) => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter your office number!');
                    return false;
                }
            }

        },

    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answer.name, answer.employeeId, answers.email, answers.officeNumer);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select which option you would like to continue with:',
            choice: ['add an intern', 'finish building my team'],
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an intern":
                    promptIntern();
                    break;
                default:
                    buildTeam();
            }
        });
};

const promptIntern = () => {
    console.log('add new intern');
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: `What is the name of the intern? (Required)`,
        validate: interName => {
            if(interName) {
                return true;
            } else {
                console.log('Please enter the name of the intern!');
                return false;

            }

        } 
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answer.employeeId, answers.email, answers.officeNumer);
        teamMembers.push(intern);
        promptMenu();
    }) 
    };

    const buildTeam = () => {
        console.log('Finish building my team');
        if (fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
    }

    promptManager();
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