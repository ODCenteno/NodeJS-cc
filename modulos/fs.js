const path = require('path');

const fs = require('fs').promises;

const readFileFromPath = async (path) => {
  try {
    const dataFromFile = await fs.readFile(path,  { encoding: 'utf-8' });
    console.log(dataFromFile);
    return dataFromFile.toString();
  } catch(error) {
    console.error(error);
  }
}

const writeFile = async (path, content) => {
  try {
    const fileToRead = await fs.readFile(path);
    return fileToRead.toString();
  } catch(error) {
    console.log(error);
  }
}

const deleteFile = async (path) => {
  try {
    fs.unlink(path);
  } catch(error) {
    console.error(error);
  };
}

exports.readFileFromPath = readFileFromPath;
exports.writeFile = writeFile;
exports.deleteFile = deleteFile;