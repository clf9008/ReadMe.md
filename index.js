//Declaring dependencies into global memory 
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./generateReadMe")
const writeFileAsync = util.promisify(fs.writeFile);

//Prompts that will be displayed to the user in command line to generate ReadMe
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What would you like to name this project?",
            //validating property to ensure user provided the proper value
            // validate: (value)=>( if (value) {return true} else {return "I need a value to continue"}),
        },
        {
            type: "input",
            name: "description",
            message: "Write a breif description of the project: ",
            // validate: (value)=>(if(value){return true} else {return "I need a value to continue"}),
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation prcess for the projct: ",
            // validate: (value)=>( if(value){return true} else {return "I need a value to continue"}),
        },
        {
            type: "input",
            name: "usage",
            message: "What will be the usage of this application?",
            //validate: (value)=>( if(value){return true} else {return "I need a value to continue"}),
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
            // validate: (value)=>( if(value){return true} else {return "I need a value to continue"}),
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
            // validate: (value)=>( if(value){return true} else {return "I need a value to continue"}),
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
            // validate: (value)=>( if(value){return true} else {return "I need a value to continue"}),
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
            // validate: (value)=>( if(value){return true} else {return "I need a value to continue"}),
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
            // validate: (value)=>( if(value){return true} else {return "I need a value to continue"}),
        }
    ]);
}

// Async function using util.promisify 
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./generatedContent', generateContent);
        console.log('Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init(); 