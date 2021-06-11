const users = require('../modules/users.js');

exports.getHome = (req, res) => {
  res.send(
    `
      <form action="/" method="POST">
        <label for="name">Nome de usuário:</label>
        <input type="text" name="name" id="name" /> <br />
        <label for="age">Idade:</label>
        <input type="number" name="age" id="age" step="1" min="1" /> <br />
        <button>Enviar</button>
      </form> <br />

      <a href="/users">Ver usuários</a>
    `);
};

exports.postHome = (req, res) => {
  users.push(req.body);

  res.send(
    `
      <h1>Usuário adicionado com sucesso!</h1>
      <a href="/">Voltar para home</a>
    `);
};
