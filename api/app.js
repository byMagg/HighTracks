const express = require('express');
const path = require('path');

require('./app/models/db');
require('dotenv').config();

const apiRouter = require('./app/routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

app.use((req, res) => {
  res.status(404).send({
    "error": {
      "code": "404",
      "message": "El recurso solicitado no se encontró en el servidor."
    }
  })
});

module.exports = app;
