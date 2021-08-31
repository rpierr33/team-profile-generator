const inquirer = require('inquirer');
const fs = require("fs");
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');

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
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumer);
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
            choices: ['add an engineer', 'add an intern', 'finish building my team'],
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an engineer":
                    promptEngineer();
                    break;
                case "add an intern":
                    promptIntern();
                    break;    
                default:
                    buildTeam();
            }
        });
};

const promptEngineer = () => {
    console.log('add new Engineer');
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: `What is the name of the engineer? (Required)`,
        validate: engineerName => {
            if(engineerName) {
                return true;
            } else {
                console.log('Please enter the name of the engineer!');
                return false;

            }

        } 
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Enter your engineer ID? (Required)',
            validate: (engineerId) => {
                if (engineerId) {
                    return true;
                } else {
                    console.log('Please enter your engineer ID!');
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
            name: 'githubName',
            message: 'Enter your Github name (Required)',
            validate: (githubName) => {
                if (githubName) {
                    return true;
                } else {
                    console.log('Please enter your Github name');
                    return false;
                }
            }

        },
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.engineerId, answers.email, answers.school);
        teamMembers.push(engineer);
        promptMenu();
    }) 
    };


    const promptIntern = () => {
        console.log('add new intern');
        return inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: `What is the name of the intern? (Required)`,
            validate: internName => {
                if(internName) {
                    return true;
                } else {
                    console.log('Please enter the name of the intern!');
                    return false;
    
                }
    
            } 
            },
            {
                type: 'input',
                name: 'internId',
                message: 'Enter your intern ID? (Required)',
                validate: (internId) => {
                    if (internId) {
                        return true;
                    } else {
                        console.log('Please enter your intern ID!');
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
                name: 'schoolName',
                message: 'Enter your school name (Required)',
                validate: (schoolName) => {
                    if (schoolName) {
                        return true;
                    } else {
                        console.log('Please enter your school name');
                        return false;
                    }
                }
    
            },
        ]).then(answers => {
            console.log(answers);
            const intern = new Intern(answers.name, answers.internId, answers.email, answers.school);
            teamMembers.push(intern);
            promptMenu();
        }) 
        };

    const buildTeam = () => {
        console.log('Finish building my team');
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
    }

    promptManager();