import os from "os";

const osFunctions = (command) => {
  const commandWitoutOS = command.replace("os --", "");

  switch(commandWitoutOS) {
    case "EOL":
      eol();
      break;
    case "cpus":
      cpus();
      break;
    case "username":
      username();
      break;
    case "homedir":
      homedir();
      break;
    case "architecture":
      architecture();
      break;
    default:
      console.log("Invalid input");
      break;
  }
}

function eol() {
  const defaulEol = os.EOL;
  console.log(defaulEol);
}

function cpus() {
  const cpus = os.cpus();
  const resultArr = [];

  for(let i = 0; i < cpus.length; i++) {
    const model = cpus[i].model;
    const speed = cpus[i].speed;
    const data = {
      model: model,
      speed: speed
    };
    resultArr.push(data);
  }

  console.log(resultArr);
}

function username() {
  const username = os.hostname();
  console.log(username);
}

export { osFunctions };