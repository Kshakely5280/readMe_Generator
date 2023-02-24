function showBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(information) {
  return `# ${information.title}
${showBadge(information.license)}
#### Description
${information.description}
## Table Of Contents:
* [Installation Instructions](#installation-instructions)
* [Application Usage](#application-usage)
* [Contribution Guidelines](#contribution-guidelines)
* [Application Testing](#application-testing)
* [Questions and Contact Information](#questions-and-contact-information)
### Installation Instructions {#installation-instructions}
${information.install}
### Application Usage {#application-usage}
${information.usage}
### Contribution Guidelines {#contribution-guidelines}
${information.guidelines}
### Application Testing {#application-testing}
${information.test}
### Questions and Contact Information  {#questions-and-contact-information}
Please sent questions to ${information.email} or reach me through Github, username: ${information.github}

`;
}

module.exports = generateMarkdown;
