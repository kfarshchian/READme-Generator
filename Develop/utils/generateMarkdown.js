// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === none){
    return "";
  }else if (license === MIT){
    return
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}

  ## Description
  ${description}

  ## Table of Contents
  ${tableOfContents}
  
  ## Installation
  ${installation}

  ## Usage
  ${usage}
  
  ## Credits
  ${credits}

  ## Tests
  ${tests}
  
`;
}

module.exports = generateMarkdown;
