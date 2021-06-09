// Using the File System module

/*
  const fs = require('fs').promises;
  const path = require('path');

  const readDir = async (dirPath = path.resolve(__dirname)) => {
    const files = await fs.readdir(dirPath);
    walk(files, dirPath);
  };

  const walk = async (files, dirPath) => {
    for (const file of files) {
      const fullPath = path.resolve(dirPath, file);
      const stats = await fs.stat(fullPath);

      if (/\.git/.test(file)) continue;
      if (/node_modules/.test(file)) continue;

      if (stats.isDirectory()) {
        readDir(fullPath);
        continue;
      }

      if (/\.json$/.test(file)) console.log(fullPath, file);
    }
  };

  readDir('/home/wkenneddy/work/studies/js-course/');

  This will list all files inside and outside directories.
*/
