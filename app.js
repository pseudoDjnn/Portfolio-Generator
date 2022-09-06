const { default: inquirer } = require("inquirer");
const inq = require("inquirer");
// const fs = require("fs");

// const generateProfile = require("./src/page-template.js");

//  const pageHTML = generateProfile(name, github)

// fs.writeFile("./index.html", pageHTML, err => {
//   if (err) throw new Error(err);

//   console.log("Portfolio complete!  Check out index.html to see the output!");
// });

const promptUser = () => {
  return inq.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "about",
      message: "Provide some information about yourself:",
    },
  ]);
};

const promptProject = (portfolioData) => {
  console.log(`
  =================
  Add a New Project
  =================
  `);
  // create array if none
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inq
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description of the project (Required)",
      },
      {
        type: "checkbox",
        name: "languages",
        message: "What did you build this project with? (Check all that apply)",
        choices: [
          "JavaScript",
          "HTML",
          "CSS",
          "ES6",
          "jQuery",
          "Bootstrap",
          "Node",
        ],
      },
      {
        type: "input",
        name: "link",
        message: "Enter the GitHub link to your project. (Required)",
      },
      {
        type: "confirm",
        name: "feature",
        message: "Would you like to feature this project?",
        default: false,
      },
      {
        type: "confirm",
        name: "confirmAddProject",
        message: "Would you like to enter another project?",
        default: false,
      },
    ])
    .then((porjectData) => {
      portfolioData.projects.push(porjectData);
      if (porjectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};
promptUser()
  // .then((answers) => console.log(answers))
  // .then(promptProject)
  // .then((projectAnswers) => console.log(projectAnswers));
  .then(promptProject)
  .then((portfolioData) => {
    console.log(portfolioData);
  });
