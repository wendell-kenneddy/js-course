const users = require('../modules/users.js');

exports.getUsersHome = (req, res) => {
  let output = '<ol>'

  for (const { name, age } of users) {
    output += `<li>Nome: ${name}; Idade: ${age}</li>`;
  }

  output += '</ol> <br />';
  output += '<a href="/">Voltar para home</a>'

  res.send(output);
}
