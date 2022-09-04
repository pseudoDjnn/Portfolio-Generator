const fs = require("fs");

const generateProfile = require("./src/page-template.js");

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile("index.html", generateProfile(name, github), (err) => {
  if (err) throw new Error(err);

  console.log("Portfolio complete!  Check out index.html to see the output!");
});
