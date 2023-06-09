

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  switch (license) {
    case "None":
      badge = "";
      break;
    case "Apache 2.0":
      badge =
        "[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPLv2":
      badge =
        "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "GPLv3":
      badge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "MIT":
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "CC0":
      badge =
        "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
  }
  return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  switch (license) {
    case "None":
      link = "";
      break;
    case "Apache 2.0":
      link =
        "[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPLv2":
      link =
        "[License: GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "GPLv3":
      link =
        "[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "MIT":
      link =
        "[License: MIT](https://opensource.org/licenses/MIT)";
      break;
    case "CC0":
      link =
        "[License: CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
  }
  return link;
};



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  return `# ${data.title} ${licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#Usage)
  -[License](#License)
  -[Contribution](#Contribution)
  -[Tests](#Tests)
  -[Questions](#Questions)

  ## Installation
  To install dependencies, enter in your command line: ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${licenseLink}

  ## Contribution
  ${data.contribution}

  ## Tests
  For testing, enter in your command line: ${data.tests}

  ## Questions
  If you have any questions, please contact ${data.gitHub} by email to ${data.email}`;
}

module.exports = {generateMarkdown};
