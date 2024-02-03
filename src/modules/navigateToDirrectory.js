const navigateToDirrectory = (pathToFile, currentDirectory) => {
  const pathWithoutCd = pathToFile.replace("cd ", "");
  const partsOfPaht = currentDirectory.split(/[\\/]/);
  let resultArr = [];

  if (pathWithoutCd.startsWith("../")) {
    for (let i = 0; i < partsOfPaht.length - 1; i++) {
      resultArr.push(partsOfPaht[i]);
    }

    const fileToGo = pathWithoutCd.replace("../", "").split(/[\\/]/);
    resultArr = resultArr.concat(fileToGo);
  }

  const resultPath = resultArr.join("/");
  
};

export { navigateToDirrectory };