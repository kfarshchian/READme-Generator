// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

if (license == 'MIT'){
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
}  
else if (license == 'None') {
    return '';
  }  
else if (license == 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } 
else if (license == 'BSD3') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } 
else if (license == 'BSD2') {
    return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
  }  
else if (license == 'Creative Commons Attribution 4.0 International') {
    return '[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)';
  } 
  else if (license == 'Creative Commons Attribution-ShareAlike 4.0 International') {
    return '[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)';
  }  
  else if (license == 'Creative Commons Attribution-NonCommercial 4.0 International') {
    return '[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/)';
  }  
  else if (license == 'Creative Commons Attribution-NoDerivates 4.0 International') {
    return '[![License: CC BY-ND 4.0](https://licensebuttons.net/l/by-nd/4.0/80x15.png)](https://creativecommons.org/licenses/by-nd/4.0/)';
  }  
  else if (license == 'Creative Commons Attribution-NonCommmercial-ShareAlike 4.0 International') {
    return '[![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)';
  }  
  else if (license == 'Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International') {
    return '[![License: CC BY-NC-ND 4.0](https://licensebuttons.net/l/by-nc-nd/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-nd/4.0/)';
  }  
  else if (license == 'Eclipse') {
    return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  }  
  else if (license == 'GNU GPL v3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }  
  else if (license == 'GNU GPL v2') {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
  }  
  else if (license == 'GNU AGPL v3') {
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
  }  
  else if (license == 'GNU LGPL v3') {
    return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
  }  
  else if (license == 'GNU FDL v1.3') {
    return '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)';
  }  
  else if (license == 'IBM') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
  }  
  else if (license == 'Mozilla') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  }  
  else if (license == 'Open Data Commons Attribution License (BY)') {
    return '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)';
  }  
  else if (license == 'Open Data Commons Open Database License (ODbL)') {
    return '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)';
  }  
  else if (license == 'Open Data Commons Public Domain Dedication and License (PDDL)') {
    return '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)';
  }  
  else if (license == 'Perl The Perl License') {
    return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
  }  
  else if (license == 'Perl The Artistic License 2.0') {
    return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
  }  
  else if (license == 'Zlib') {
    return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
  }  
}
;

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.projectName}

  ## License Information
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  ${data.tableOfContents}
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}

  ## Tests
  ${data.tests}
  
`;
}

module.exports = generateMarkdown;
