const fs = require('fs/promises');

module.exports = async function (path) {
  const data = fs.readFile(path);
  return data;
}
