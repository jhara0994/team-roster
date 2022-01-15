// variables
const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const fs = require('fs')
const path = require('path')
const generateFile = require('./src/generateFile.js')
const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html')
const teamMembers = []

// inquirer prompt for team member and their information
// prompt for manager
const managerPrompt = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the team manager for this project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's id number?",
            validate: nameInput => {
                if (nameInput === Number) {
                    return true 
                } else {
                    console.log("Please enter the manager's ID!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter a valid email!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What office does the manager occupy?",
            validate: officeNumber => {
                if (officeNumber = Number) {
                    return true
                } else {
                    return false
                }
            }
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput
        const manager = new Manager (name, id, email, officeNumber)

        teamArray.push(manager)
        console.log(manager)
    })
}

// prompt for employee
const addEmployee = () => {
    console.log('Add employees to the team project')
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Which role will this employee fill in the team?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter the employee's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter an employee's name!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID number?",
            validate: nameInput => {
                if (nameInput === Number) {
                    return true
                } else {
                    console.log('Please enter the employee ID!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true
                } else {
                    console.log('Please enter a valid email address!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employees github user account?",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the employee's github profile link!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the intern currently attend?",
            when: (input) => input.role === 'Intern',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log ("Please enter the school the intern attends.")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAndAddEmployee',
            message: 'Do any other members need to be added to this project?',
            default: false
        }
    ])
    .then(employeeInfo => {
        let {name, id, email, role, github, school, confirmAndAddEmployee} = employeeInfo
        let employee

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github)
            console.log(employee)
        }

        teamArray.push(employee)

        if (confirmAndAddEmployee) {
            return addEmployee(teamArray)
        } else {
            return teamArray
        }

    })
}

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {

        if(err) {
            console.log(err)
            return
        } else {
            console.log("The team profile has been successfully created, and the information has been logged to the index.html file")
        }
    })
}

