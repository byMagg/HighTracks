const express = require('express');
const router = express.Router();
const ctrlTracks = require('../controllers/tracks');
const ctrlAuth = require('../controllers/auth')

// Token
router.get('/generate_token', ctrlAuth.generateTokenSpotify);

// Search
router.get('/search/:name', ctrlTracks.tracksSearchSpotify);

// Tracks
router.get('/tracks/:name', ctrlAuth.verifyToken, ctrlTracks.trackGetOne);
router.get('/tracks', ctrlAuth.verifyToken, ctrlTracks.trackGetAll);
router.post('/tracks', ctrlAuth.verifyToken, ctrlTracks.trackInsert);
router.put('/tracks/:id', ctrlAuth.verifyToken, ctrlTracks.trackUpdate);
router.delete('/tracks/:id', ctrlAuth.verifyToken, ctrlTracks.trackDelete);

router.post('/login', ctrlAuth.login);

module.exports = router;
