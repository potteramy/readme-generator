// TODO: Include packages needed for this application
const fs = require('fs');
const {buildPageTitle, buildTableOfContents} = require("./generate")
// TODO: Create an array of questions for user input
const questions = [
  {
    "What is the title of your project?"
  }
  {
    "Write a description of your project."
  }
  {
    "Describe how to install your project."
  }
  {
    "How should a user use your project?"
  }
  {
    "What license would you like to add to your project?"
  }
  {
    "Write your contibution guidelines."
  }
  {
    "If you wrote any tests for your file, please include usage instructions here."
  }
  {
    "What is your GitHub username?"
  }
  {
    "What is your email address?"
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('README.md')
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
