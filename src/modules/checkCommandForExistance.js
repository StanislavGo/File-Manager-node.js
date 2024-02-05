const arrOfAllComands = [".exit", "ls", "cd", "os"];

const checkCommand = (comand) => {
  const arrayInclues = arrOfAllComands.includes(comand);

  if (arrayInclues === false) {
    console.log("Invalid input");
  }
}

export { checkCommand };