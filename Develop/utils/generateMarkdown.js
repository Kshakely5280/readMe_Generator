function showBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// license badge and information links 
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `##### Click to learn more about this license: [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT "Click to view the MIT License on opensource.org")`;
    case "GPLv2":
      return `The GPL is a free software license, and therefore it permits people to use and even redistribute the software without being required to pay anyone a fee for doing so.`;
    case "Apache":
      return `##### Click to learn more about this license: [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "GPLv3":
      return `
      1. Anyone can copy, modify and distribute this software.
      2. You have to include the license and copyright notice with each and every distribution.
      3. You can use this software privately.
      4. You can use this software for commercial purposes.
      5. If you dare build your business solely from this code, you risk open-sourcing the whole code base.
      6. If you modify it, you have to indicate changes made to the code.
      7. Any modifications of this code base MUST be distributed with the same license, GPLv3.
      8. This software is provided without warranty.
      9. The software author or license can not be held liable for any damages inflicted by the software.
      `;
    case "Unlicense":
      return `##### Click to learn more about this license: [![License](https://img.shields.io/badge/License-unlicense-blue.svg)](https://opensource.org/licenses/unlicense)`;
    case "Other":
      return `User provided license without provided information or link`;
    default:
      return "";
  }
}

// Function generate markdown formatts and takes previouosly captured user input for the readme
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
To see the video walkthrough, please click here: https://www.loom.com/share/62032da12baa48aa97ed72ae30d98d18. Please sent questions to ${
    information.email
  } or reach me through Github, link: https://github.com/${information.github}
#### License Information <a name="license"></a>
${renderLicenseLink(information.license)}
`;
}

module.exports = generateMarkdown;
