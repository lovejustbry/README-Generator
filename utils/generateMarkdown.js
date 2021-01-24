const { fetchAsyncQuestionPropertyQuestionProperty } = require("inquirer/lib/utils/utils");

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

##Description

${data.description}

## Table of Contents

* [Installation Instructions](#Installation)
* [Usage Information](#Usage)
* [Collabrators](#Collabrator)
* [Test Instructions](#Tests)
* [License](#License)
* [Questions](#Questions)
    
## Installation

${data.Installation}

## Usage

${data.Usage}

#Collabrator

${data.Collabrator}

## Tests

${data.Test}

## License
${data.license}

## Questions
[Github Profile](https://github.com/${data.github})
If you have any questions, please do not hestiate to contact me at <${data.email}>
`;
}

module.exports = generateMarkdown;
