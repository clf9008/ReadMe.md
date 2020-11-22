//Declaring dependencies into global memory 
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

//Prompts that will be displayed to the user in command line to generate ReadMe
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What would you like to name this project?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a breif description of the project: ",
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation prcess for the projct: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What will be the usage of this application?",
        }

    ])
}