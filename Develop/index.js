const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown')

inquirer
  //prompts for user to enter required information
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Please enter the title of your project:",
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description for your project:",
    },
    {
      type: "input",
      name: "install",
      message: "Please provide installation instructions:",
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide user usage information:",
    },
    {
      type: "input",
      name: "guidelines",
      message: "Please provide contribution guidelines:",
    },
    {
      type: "input",
      name: "test",
      message: "Please provide app test instructions:",
    },
    {
      type: "list",
      name: "license",
      message: "Please select a license for your application:",
      choices: ["MIT", "GPLv2", "Apache", "GPLv3", "Unlicense", "Other"],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your Github username:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter contact email:'
    }
  ])
  .then((information) => {
    let title = information.title;
    let description = information.description;
    let install = information.install;
    let usage = information.usage;
    let guidelines = information.guidelines;
    let test = information.test;
    let license = information.license;
    let github = information.github;
    let email = information.email;



    fs.writeFile(
      "README.md",
      `# ${title}\n\n#### Description\n\n${description}\n\n#### Application License <a name="application-license"></a>\n\n${showBadge(
        license
      )}\n\n## Table of Contents\n\n${tableOfContents}\n\n## Installation Instructions <a name="installation"></a>\n\n${install}\n\n## Application Usage <a name="usage"></a>\n\n${usage}\n\n## Contribution Guidelines <a name="guidelines"></a>\n\n${guidelines}\n\n## Testing <a name="testing"></a>\n\n${test}\n\n## Questions & Contact information\n\n`,
      (err) =>
        err
          ? console.error(err)
          : console.log("Your ReadMe has been generated!")
    );
  });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
