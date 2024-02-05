import fs from "fs";

const printListOffiles = (pathToFile) => {
  const arrOfFiles = fs.readdirSync(pathToFile);
  const tableData = [];

  arrOfFiles.forEach((item) => {
    const itemPath = `${pathToFile}/${item}`;
    const stats = fs.statSync(itemPath);
    const fileType = (`${stats.isDirectory() ? 'directory' : 'file'}`);

    tableData.push({ name: item, type: fileType });
  });

  console.table(tableData);
}

export { printListOffiles };