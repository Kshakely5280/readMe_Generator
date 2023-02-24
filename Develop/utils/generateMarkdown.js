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
* [Installation Instructions](#install)
* [Application Usage](#usage)
* [Contribution Guidelines](#guidelines)
* [Application Testing](#test)
* [Questions and Contact Information](#contact)
### Installation Instructions <a name="install"></a>
${information.install}
### Application Usage <a name="usage"></a>
${information.usage}
### Contribution Guidelines <a name="guidelines"></a>
${information.guidelines}
### Application Testing <a name="test"></a>
${information.test}
### Questions and Contact Information <a name="contact"></a>
Please sent questions to ${
    information.email
  } or reach me through Github, link: https://github.com/${
    information.github
  }

`;
}

module.exports = generateMarkdown;
