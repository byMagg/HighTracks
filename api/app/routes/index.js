const express = require('express');
const router = express.Router();
const ctrlTracks = require('../controllers/tracks');
const ctrlAuth = require('../controllers/auth')

// Tracks
router.get('/generate_token', ctrlAuth.generateToken);

router.get('/search/:name', ctrlTracks.tracksSearchSpotify);

router.get('/tracks/:name', ctrlTracks.trackGetOne);
router.get('/tracks', ctrlTracks.trackGetAll);
router.post('/tracks', ctrlTracks.trackInsert);
router.put('/tracks/:id', ctrlTracks.trackUpdate);
router.delete('/tracks/:id', ctrlTracks.trackDelete);

module.exports = router;
