const express = require('express');
const router = express.Router();
const ctrlTracks = require('../controllers/tracks');

// Restaurants
router.get('/tracks', ctrlTracks.tracksReadAll);
router.get('/tracks/:tracksid', ctrlTracks.tracksReadOne);
router.put('/tracks/:tracksid', ctrlTracks.tracksUpdateOne);

module.exports = router;
