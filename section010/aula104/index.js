// Introduction to expressJS

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(
    `
      <form action="/" method="post">
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" />
        <button>Enviar</button>
      </form>
    `);
});

app.post('/', (req, res) => {
  res.send('<h1>POST efetuado com sucesso</h1>');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
