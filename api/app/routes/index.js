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
 *     UnauthorizedError:
 *       description: Unauthorized access error
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: Descriptive error message
 *             example:
 *               message: Unauthorized access
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
 *             example:
 *               message: Bad request
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
 *         $ref: '#/components/responses/UnauthorizedError'
 */
router.get('/tracks', ctrlAuth.verifyToken, ctrlTracks.trackGetAll);
router.post('/tracks', ctrlAuth.verifyToken, ctrlTracks.trackInsert);
router.put('/tracks/:id', ctrlAuth.verifyToken, ctrlTracks.trackUpdate);
router.delete('/tracks/:id', ctrlAuth.verifyToken, ctrlTracks.trackDelete);

//Comments
router.post('/tracks/:id/comments', ctrlAuth.verifyToken, ctrlTracks.trackInsertComment);

// Auth
router.post('/login', ctrlAuth.login);

module.exports = router;