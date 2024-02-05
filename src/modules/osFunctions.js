import os from "os";

const osFunctions = (command) => {
  const commandWitoutOS = command.replace("os --", "");
  console.log(commandWitoutOS);

  switch(commandWitoutOS) {
    case "EOL":
      eol();
      break;
    case "cpus":
      cpus();
      break;
    case "username":
      cpus();
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

}

export { osFunctions };