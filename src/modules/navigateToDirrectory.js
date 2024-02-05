import { changeCurrentPath } from "../app.js";
import os from "os";

const userHomeDirectory = os.homedir().split(/[\\/]/);

const navigateToDirrectory = (pathToFile, currentDirectory) => {
  const pathWithoutCd = pathToFile.replace("cd ", "");
  const partsOfPath = currentDirectory.split(/[\\/]/);

  if (currentDirectory == userHomeDirectory[0]) {
    changeCurrentPath(userHomeDirectory[0]);
  } else if (pathWithoutCd.startsWith("..") || pathToFile == "up") {
    partsOfPath.pop();
    const fileToGo = pathWithoutCd.replace("../", "").split(/[\\/]/);
    partsOfPath.concat(fileToGo);
    const resultPath = partsOfPath.join("/");
    changeCurrentPath(resultPath);
  } else {
    const pathToFile = pathWithoutCd.replace(".", "").replace(/[\\/]/, "").split(/[\\/]/);
    const fullPath = partsOfPath.concat(pathToFile);
    const resultPath = fullPath.join("/");
    changeCurrentPath(resultPath);
  }
};

export { navigateToDirrectory };