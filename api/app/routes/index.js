const express = require('express');
const router = express.Router();
const ctrlTracks = require('../controllers/tracks');
const ctrlAuth = require('../controllers/auth')

// Tracks
router.get('/tracks/:tracksid', ctrlTracks.tracksReadOne);
router.get('/login', ctrlAuth.login);
// router.get('/logged', ctrlAuth.logged);

module.exports = router;
