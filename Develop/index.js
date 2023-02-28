const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
      type: "input",
      name: "github",
      message: "Please enter your Github username:",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter contact email:",
    },
  ])
  .then((information) => {
    // collects values to mad lib into the exported markdown file
    let title = information.title;
    let description = information.description;
    let install = information.install;
    let usage = information.usage;
    let guidelines = information.guidelines;
    let test = information.test;
    let license = information.license;
    let github = information.github;
    let email = information.email;
    // creates file, or overwrites existing file with new user input
    fs.writeFile("README.md", generateMarkdown(information), (err) =>
      err ? console.error(err) : console.log("Your ReadMe has been generated!")
    );
  });
