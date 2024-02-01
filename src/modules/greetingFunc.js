const greetingFunction = () => {
  const cliArgs = process.argv.slice(2);

  const usernameArg = cliArgs.find((el) => el.startsWith("--username="));
  const username = usernameArg.split("=")[1];

  console.log(`Welcome to the File Manager, ${username || 'Username'}!`);
}

export { greetingFunction };