// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const {generateMarkdown} = require("./utils/generateMarkdown")


  inquirer //works
    .prompt([
  {
    type: 'input',
    name: 'gitHub',
    message: "What is your GitHub username?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email address?",
  },
  {
    type: 'input',
    name: 'title',
    message: "What is the title of your project?",
  },
  {
    type: 'input',
    name: 'description',
    message: "Please write a short description of your project.",
  },
  {
    type: 'list',
    name: 'license',
    message: "What license should your project have?",
    choices:[
    "None",
    "Apache 2.0",
    "GPLv2",
    "GPLv3",
    "MIT",
    "CC0"
    ],
  },
  {
    type: 'input',
    name: 'install',
    message: "What command should be run to install dependencies?",
  },
  {
    type: 'input',
    name: 'tests',
    message: "What command should be run to run tests?",
  },
  {
    type: 'input',
    name: 'usage',
    message: "What does the user need to know about using the repo?",
  },
  {
    type: 'input',
    name: 'contribution',
    message: "What does the user need to know about contributing to the repo?",
  }
])



// TODO: Create a function to write README file

 .then(data => { 
  const content = generateMarkdown(data);
  fs.writeFile("./readme/README.md", content, err => {
  if (err) 
    console.log(err);
  else {
    console.log("Success!")
  }
});
});


