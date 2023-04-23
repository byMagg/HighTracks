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
 *             type: object
 *             properties:
 *               author:
 *                 type: string
 *               text:
 *                 type: string
 *               score:
 *                 type: integer
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
router.get('/generate_token', ctrlAuth.generateTokenSpotify);

// Search
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
router.post('/tracks/:id/comments', ctrlAuth.verifyToken, ctrlTracks.trackInsertComment);

// Auth
router.post('/login', ctrlAuth.login);

module.exports = router;