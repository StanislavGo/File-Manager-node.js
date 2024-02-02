import { getUserName } from "./modules/getUserName.js";
import { greetingFunction } from "./modules/greetingFunc.js";
import { createInterface } from "readline";
const username = getUserName();

greetingFunction();

const exitFileManager = () => {
  printCurrentWorkingDirectory();
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

rl.on("line", (message) => {
  if (message === ".exit") {
    exitFileManager();
  }
});

const printCurrentWorkingDirectory = () => {
  const currentWorkingDirectory = process.cwd();
  console.log(`You are currently in: ${currentWorkingDirectory}`);
};

printCurrentWorkingDirectory();