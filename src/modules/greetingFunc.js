const greetingFunction = () => {
  const cliArgs = process.argv.slice(2);

  const usernameArg = cliArgs.find((el) => el.startsWith("--username="));
  const username = usernameArg.split("=")[1];
  const greetingMessage = `Welcome to the File Manager, ${username || 'Username'}!`;

  console.log(greetingMessage);
}

export { greetingFunction };