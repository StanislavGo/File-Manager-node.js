const getUserName = () => {
  const cliArgs = process.argv.slice(2);

  const usernameArg = cliArgs.find((el) => el.startsWith("--username="));
  const username = usernameArg.split("=")[1];
  
  return username;
};

export { getUserName };