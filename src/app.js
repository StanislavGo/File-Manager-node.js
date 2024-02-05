import { getUserName } from "./modules/getUserName.js";
import { greetingFunction } from "./modules/greetingFunc.js";
import { createInterface } from "readline";
import { checkCommand } from "./modules/checkCommandForExistance.js";
import { printListOffiles } from "./modules/printListOfFilles.js";
import { navigateToDirrectory } from "./modules/navigateToDirrectory.js";
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
let currentDirectory = userHomeDirectory;

const changeCurrentPath = (newPath) => {
  currentDirectory = newPath;
}

const getUserHomeDirectory = () => {
  console.log(`You are currently in: ${currentDirectory}`);
};

rl.on("line", (command) => {
  if (command === ".exit") {
    exitFileManager();
  } else if (command === "ls") {
    printListOffiles(currentDirectory);
  } else if (command.startsWith("cd")) {
    navigateToDirrectory(command, currentDirectory);
  } else if (command === "up") {
    navigateToDirrectory(command, currentDirectory);
  } else {
    checkCommand(command);
  }
  getUserHomeDirectory();
});

getUserHomeDirectory();

export { changeCurrentPath };