const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');
const path = require('path');''


// inquirer
//   .prompt([
//     {
//         type: 'input',
//         message: 'What is your project name?',
//         name: 'projectname',
//   ]},



  // array of questions for user
const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title'
    },
    {
      type: 'input',
      message: 'What is your project description?',
      name: 'description'
    },
    {
      type: 'input',
      message: 'What are the installation instructions?',
      name: 'Installation'
    },
    {
      type: 'input',
      message: 'Include usage information here',
      name: 'Usage'
    },
    {
      type: 'input',
      message: 'Who contributed to this project?',
      name: 'Collabrator'
    },
    {
      type: 'input',
      message: 'What are the test instructions?',
      name: 'Test'
    },
    {
      type: 'list',
      message: 'What license was used?',
      choices:  ['Apache 2.0 License', 'Boost Software License 1.0', 
                  'IBM Public License Version 1.0', 'SIL Open Font License 1.1'],
      name:'license'
    },
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'github'
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email'
    }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data, 'utf8');
}

// function to initialize program
function init() {
  console.log("function called")
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', markdown({ ...inquirerResponses }));
  });
}

// function call to initialize program
init(); 
