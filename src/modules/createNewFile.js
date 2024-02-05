import fs from "fs/promises";

const createNewFile = async (command) => {
  const fileName = command.replace("add ", "");
  const pathToCreateFile = "./src/" + fileName;
  
  await fs.writeFile(pathToCreateFile, "I am fresh and young", { encoding: "utf-8", flag: "wx" });
}

export { createNewFile };