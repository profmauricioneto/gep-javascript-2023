const fs = require("fs");
const prompt = require("prompt-sync")();

/**
 * @function
 * @name menu
 * @param none
 * @description function responsable to print the menu after the execution
 */
const menu = () => {
  console.log("=============================");
  console.log("1. Add an User");
  console.log("2. Add a Task");
  console.log("3. Delete a Task");
  console.log("4. Show All Users");
  console.log("5. Print User Tasks");
  console.log("6. Update Task Status");
  console.log("7. Leave");
  console.log("=============================");
  let option = Number(prompt("Option: "));
  return option;
};

/**
 * @function
 * @name
 * @param
 * @description
 */
function createFile(filename) {
  if (!fs.existsSync("logs/")) {
    fs.mkdir("logs/", (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Directory created successfully!");
      }
    });
  } else {
    console.log("Directory already exists!");
  }

  fs.writeFile(__dirname + "/logs/" + filename + ".json", "", (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("File created successfully!");
    }
  });
}

/**
 * @function
 * @name updateRegisters
 * @param
 * @description
 */
function updateRegisters(register, filename) {
  fs.writeFileSync(
    __dirname + "/logs/" + filename + ".json",
    JSON.stringify(register),
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("File recorded successfully!");
      }
    }
  );
}

/**
 *
 */
module.exports = {
  menu,
  createFile,
  updateRegisters,
};
