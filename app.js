const { default: inquirer } = require("inquirer");
const inq = require("inquirer");
// const fs = require("fs");

// const generateProfile = require("./src/page-template.js");

//  const pageHTML = generateProfile(name, github)

// fs.writeFile("./index.html", pageHTML, err => {
//   if (err) throw new Error(err);

//   console.log("Portfolio complete!  Check out index.html to see the output!");
// });

inq
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ])
  .then((answers) => console.log(answers));
