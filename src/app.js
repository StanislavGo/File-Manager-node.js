import { getUserName } from "./modules/getUserName.js";
import { greetingFunction } from "./modules/greetingFunc.js";
import { createInterface } from "readline";
import { checkCommand } from "./modules/checkCommandForExistance.js";
import fs from "fs";
import os from "os";
const username = getUserName();

greetingFunction();

const exitFileManager = () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  rl.close();
};

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("SIGINT", () => {
  exitFileManager();
});

const userHomeDirectory = os.homedir();

const getUserHomeDirectory = () => {
  console.log(`You are currently in: ${userHomeDirectory}`);
};

const pringListOffiles = (pathToFile) => {
  const arrOfFiles = fs.readdirSync(pathToFile);
  const tableData = [];

  arrOfFiles.forEach((item) => {
    const itemPath = `${pathToFile}/${item}`;
    const stats = fs.statSync(itemPath);
    const fileType = (`${stats.isDirectory() ? 'directory' : 'file'}`);

    tableData.push({ name: item, type: fileType });
  });

  console.table(tableData);
}

rl.on("line", (command) => {
  checkCommand(command);
  getUserHomeDirectory();
  if (command === ".exit") {
    exitFileManager();
  } else if (command === "ls") {
    pringListOffiles(userHomeDirectory);
  }
});

getUserHomeDirectory();
