const express = require('express');
const users = require('./users.js');
const app = express();
const port = 3000;

app.use(express.urlencoded(
  {
    extended: true
  }
));

app.get('/', (req, res) => {
  res.send(
    `
    <h1>Hello!</h1>

    <form action="/" method="post">
      <label for="user">Usuário:</label>
      <input type="text" id="user" name="user" /> <br />
      <label for="age">Idade:</label>
      <input type="number" id="age" name="age" /> <br />
      <button>Enviar</button>
    </form>

    `
  );
});

app.get('/users/:id?', (req, res) => {
  const user = utrsers.filter(e => e.id == req.params['id'])[0];
  res.send(
    JSON.stringify(user) ||
    '<h1>User not found</h1>'
  );
})

app.post('/', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.user,
    age: req.body.age
  };

  users.push(user);

  res.send(JSON.stringify(users));
});

app.listen(port, () => {
  console.log('Server running at http://localhost:' + port);
});
