const express = require('express');
const router = express.Router();
const ctrlTracks = require('../controllers/tracks');
const ctrlAuth = require('../controllers/auth')

// Tracks
router.get('/generate_token', ctrlAuth.generateToken);
router.get('/tracks/:tracksid', ctrlTracks.tracksReadOne);
// router.get('/logged', ctrlAuth.logged);

module.exports = router;
