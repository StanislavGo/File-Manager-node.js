import { getUserName } from "./modules/getUserName.js";
import { greetingFunction } from "./modules/greetingFunc.js";
import { createInterface } from "readline";
const username = getUserName();

greetingFunction();

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("SIGINT", () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  rl.close();
});

rl.on("line", (message) => {
  if (message === ".exit") {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    rl.close();
  }
});