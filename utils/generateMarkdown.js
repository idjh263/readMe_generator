const fs = require('fs');

// TODO: Create a function that ckreturns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `https://img.shields.io/badge/License-MIT-yellow.svg`
  }
  if (license === 'GPLv3') {
    return `https://img.shields.io/badge/License-GPLv3-blue.svg`
  }
  if (license === 'Apache') {
    return `https://img.shields.io/badge/License-Apache_2.0-blue.svg` 
  }
  if (license === 'Mozilla') {
    return `https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg` 
}
  if (license === 'Boost') {
    return `https://img.shields.io/badge/License-Boost_1.0-lightblue.svg` 
}
  if (license === 'Unlicense') {
    return `https://img.shields.io/badge/license-Unlicense-blue.svg` 
} else {
  return ``;
}
};
  
  
//   if (!license) {
//     return ``;
//   } else {
//     return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
//   }
// }

// TODO: Create a function that returns the license link

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  }
  if (license === 'GPLv3') {
    return `https://www.gnu.org/licenses/gpl-3.0`
  }
  if (license === 'Apache') {
    return `https://opensource.org/licenses/Apache-2.0` 
  }
  if (license === 'Mozilla') {
    return `https://opensource.org/licenses/MPL-2.0` 
}
  if (license === 'Boost') {
    return `https://www.boost.org/LICENSE_1_0.txt` 
}
  if (license === 'Unlicense') {
    return `http://unlicense.org/` 
} else {
  return ``;
}
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
  }
}


// TODO: Create a function to generate markdown for README



function generateMarkdown(data) {
    return `

##Project Title: 
<h1 align="center">${data.projectTitle} </h1>
  
![badge]${renderLicenseBadge(data.license)}<br />


## Description
🔍 ${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
💾 ${data.installation}

## Usage
💻 ${data.usage}

## License
![License:${data.license}]

This application is covered by the ${data.license} license. 

${renderLicenseLink(data.license)}<br />

## Contributing
👪 ${data.contributing}

## Tests
✏️ ${data.tests}

## Questions
✋ ${data.questions}<br />
<br />
Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
<br />
✉️ Email me with any questions: ${data.email}<br /><br />`;
  }
  
  module.exports = generateMarkdown;