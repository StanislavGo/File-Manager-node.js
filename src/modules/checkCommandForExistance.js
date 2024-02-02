const arrOfAllComands = [".exit", "ls"];

const checkCommand = (comand) => {
  for(let i = 0; i < arrOfAllComands.length; i++) {
    if (comand != arrOfAllComands[i]) {
      console.log("Invalid input");
    }
  }
}

export { checkCommand };