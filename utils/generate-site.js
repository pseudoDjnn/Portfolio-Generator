const fs = require("fs");

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      // if there's an error, reject the Promise and send the error to the Promice's '.catch()' method
      if (err) {
        reject(err);
        // return out the function here to make sure the Promise doesn't execute the resolve function as well
        return;
      }
      // if everthing went well, resolve the Promise and send the successful data to the '.then()' method
      resolve({
        ok: true,
        message: "File Created!",
      });
    });
  });
};

// copy files
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "Stylesheet created!",
      });
    });
  });
};

module.exports = { writeFile, copyFile };
