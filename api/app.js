const express = require('express');
const path = require('path');
const cors = require('cors');

require('./app/models/db');
require('dotenv').config();

const apiRouter = require('./app/routes/index');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

const ctrlAuth = require('./app/controllers/auth');
ctrlAuth.generateTokenSpotify();

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Define la información básica del API para Swagger
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Mi API de Tracks',
    version: '1.0.0',
    description: 'Una API para gestionar tracks',
  },
  securityDefinitions: {
    jwt: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
      description: 'Token de autenticación JWT',
    },
  },
  servers: [
    {
      url: '/api',
      description: 'Servidor local',
    },
  ],
};

// Configura opciones para Swagger
const options = {
  swaggerDefinition,
  // Array de archivos que contienen las rutas de la aplicación
  apis: ['./app/routes/*.js',],
};

// Crea un objeto Swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Sirve la documentación en la ruta /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((req, res) => {
  res.status(404).send({
    "error": {
      "code": "404",
      "message": "El recurso solicitado no se encontró en el servidor."
    }
  })
});

module.exports = app;
