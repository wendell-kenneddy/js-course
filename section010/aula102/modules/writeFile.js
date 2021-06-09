const fs = require('fs/promises');

module.exports = async function (path, content, flag) {
  const data = JSON.stringify(content, '', 2);
  fs.writeFile(path, data, { flag: flag });
};
