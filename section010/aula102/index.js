const writeFile = require('./modules/writeFile.js');
const readFile = require('./modules/readFile.js');
const path = require('path');
const filePath = path.resolve(__dirname, 'data.json');
const data = [
  {
    name: 'John',
    age: 16
  },
  {
    name: 'Mary',
    age: 21
  },
  {
    name: 'Percival',
    age: 88
  },
  {
    name: 'Jaden',
    age: 19
  }
];

const logData = dataJson => {
  const parsedData = JSON.parse(dataJson);
  console.log(parsedData);
};

writeFile(filePath, data, 'w');

readFile(filePath)
  .then(data => logData(data))
  .catch(e => console.log(e));
