const express = require('express');
const cors = require('cors');
const connection = require('./db_configs');
const app = express();

app.use(cors());
app.use(express.json());

const port = 1500;

// login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  connection.query(query, [username, password], (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Erro no servidor.'
      });
    }

    if (results.length > 0) {
      res.json({
        success: true,
        message: 'Login completo'
      });
    } else {
      res.json({
        success: false,
        message: 'Usuário ou senha incorretos'
      });
    }
  });
});

// cadastro
app.post('/cadastro', (req, res) => {
  const { name, email, username, password } = req.body;
  const query = 'INSERT INTO users(name, email, username, password) VALUES(?, ?, ?, ?)';
  connection.query(query, [name, email, username, password], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Cadastro completo'
      });
    }
    res.json({
      success: true,
      message: 'Não foi possível realizar seu cadastro.'
    });
  });
});


app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));