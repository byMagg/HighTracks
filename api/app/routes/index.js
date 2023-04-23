const express = require('express');
const router = express.Router();
const ctrlTracks = require('../controllers/tracks');
const ctrlAuth = require('../controllers/auth')

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Comment:
 *       type: object
 *       properties:
 *         author:
 *           type: string
 *         text:
 *           type: string
 *         score:
 *           type: integer
 *     Track:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         duration_ms:
 *           type: integer
 *         images:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               height:
 *                 type: integer
 *               url:
 *                 type: string
 *               width:
 *                 type: integer
 *         artists:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               external_urls:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     spotify:
 *                       type: string
 *               name:
 *                 type: string
 *         external_urls:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               spotify:
 *                 type: string
 *         comments:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Comment'
 *   responses:
 *     DeleteSuccess:
 *       description: Eliminación exitosa de la pista
 *     Unauthorized:
 *       description: Unauthorized access error
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: Descriptive error message
 *                 example: Unauthorized access
 *               code:
 *                 type: integer
 *                 description: Código de error
 *                 example: 401
 *     BadRequest:
 *       description: Bad request error
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: Descriptive error message
 *                 example: Bad request
 *               code:
 *                 type: integer
 *                 description: Código de error
 *                 example: 400
 *     InternalServer:
 *       description: Error interno del servidor
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: Descripción del error
 *                 example: Error interno del servidor
 *               code:
 *                 type: integer
 *                 description: Código de error
 *                 example: 500
 *     NotFound:
 *       description: Recurso no encontrado
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: Descripción del error
 *                 example: Recurso no encontrado
 *               code:
 *                 type: integer
 *                 description: Código de error
 *                 example: 404
 */

// Token
/**
 * @swagger
 * /generate_token:
 *   get:
 *     summary: Generar token de autorización de Spotify
 *     tags:
 *       - Auth
 *     parameters:
 *       - name: grant_type
 *         in: query
 *         description: Tipo de concesión de la autorización
 *         required: true
 *         schema:
 *           type: string
 *           enum: [client_credentials]
 *       - name: client_id
 *         in: query
 *         description: ID del cliente de la aplicación de Spotify
 *         required: true
 *         schema:
 *           type: string
 *           example: your_client_id
 *       - name: client_secret
 *         in: query
 *         description: Clave secreta del cliente de la aplicación de Spotify
 *         required: true
 *         schema:
 *           type: string
 *           example: your_client_secret
 *     responses:
 *       '200':
 *         description: Token de autorización generado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 access_token:
 *                   type: string
 *                   description: Token de acceso generado
 *                   example: BQBJSNsy7khF8ySlw1MwtuUVNz...
 *                 token_type:
 *                   type: string
 *                   description: Tipo de token generado
 *                   example: Bearer
 *                 expires_in:
 *                   type: integer
 *                   description: Tiempo de expiración del token generado
 *                   example: 3600
 *       '400':
 *         $ref: '#/components/responses/BadRequest'
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '500':
 *         $ref: '#/components/responses/InternalServer'
 */
router.get('/generate_token', ctrlAuth.generateTokenSpotify);

// Search
/**
 * @swagger
 * /search/{search}:
 *   get:
 *     tags: [Tracks]
 *     summary: Buscar tracks en Spotify
 *     description: Busca tracks en Spotify que contengan el término de búsqueda especificado en el parámetro `search`
 *     parameters:
 *       - in: path
 *         name: search
 *         required: true
 *         description: Término de búsqueda
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de tracks encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Track'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServer'
 */
router.get('/search/:search', ctrlTracks.tracksSearchSpotify);

// Tracks
/**
 * @swagger
 *  basepath: /api
 * /tracks/{name}:
 *   get:
 *     summary: Obtiene una canción por su nombre
 *     tags: [Tracks]
 *     description: Obtiene una canción por su nombre desde la base de datos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: Nombre de la canción a buscar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Canción encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Track'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *
 */
router.get('/tracks/:name', ctrlAuth.verifyToken, ctrlTracks.trackGetOne);

/**
 * @swagger
 * /tracks:
 *   get:
 *     summary: Obtiene todas las canciones.
 *     tags: [Tracks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Track'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 */
router.get('/tracks', ctrlAuth.verifyToken, ctrlTracks.trackGetAll);

/**
 * @swagger
 * /tracks:
 *   post:
 *     summary: Insert a new track
 *     tags: [Tracks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Track'
 *     responses:
 *       201:
 *         description: The inserted track
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Track'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       401:
 *         $ref: '#/components/responses/Unauthorized'
 *       500:
 *         $ref: '#/components/responses/InternalServer'
 */
router.post('/tracks', ctrlAuth.verifyToken, ctrlTracks.trackInsert);

/**
 * @swagger
 * /tracks/{id}:
 *   put:
 *     summary: Actualiza un track por su ID.
 *     description: Actualiza la información de un track por su ID.
 *     tags:
 *       - Tracks
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la canción a buscar
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Objeto que contiene los campos a actualizar del track
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Track'
 *     responses:
 *       '200':
 *         description: Respuesta exitosa.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Track'
 *       '400':
 *         $ref: '#/components/responses/BadRequest'
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         $ref: '#/components/responses/InternalServer'
 */
router.put('/tracks/:id', ctrlAuth.verifyToken, ctrlTracks.trackUpdate);

/**
 * @swagger
 * /tracks/{id}:
 *   delete:
 *     summary: Elimina una pista
 *     description: Elimina una pista a partir de su ID
 *     tags: [Tracks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la pista a eliminar
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '200':
 *         $ref: '#/components/responses/DeleteSuccess'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         $ref: '#/components/responses/InternalServer'
 */
router.delete('/tracks/:id', ctrlAuth.verifyToken, ctrlTracks.trackDelete);

//Comments
/**
 * @swagger
 * /tracks/{id}/comments:
 *   post:
 *     summary: Agrega un comentario a un track
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del track al que se desea agregar un comentario
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Objeto que contiene la información del comentario a agregar
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       '201':
 *         description: Comentario agregado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       '400':
 *         $ref: '#/components/responses/BadRequest'
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         $ref: '#/components/responses/InternalServer'
 */
router.post('/tracks/:id/comments', ctrlAuth.verifyToken, ctrlTracks.trackInsertComment);

// Auth
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Autenticación de usuario y generación de token JWT
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario
 *                 example: usuario@example.com
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *                 example: p@ssw0rd
 *     responses:
 *       200:
 *         description: Autenticación exitosa, devuelve un token JWT
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT generado
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 *       401:
 *         description: Autenticación fallida, credenciales inválidas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: Credenciales inválidas, verifique su correo electrónico y contraseña
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
router.post('/login', ctrlAuth.login);

module.exports = router;