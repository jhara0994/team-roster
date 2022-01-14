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
const managerPrompt = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the team manager for this project?',
            validate: managerName => {
                if (managerName) {
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
            validate: managerId => {
                if (managerId) {
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
