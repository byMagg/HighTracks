const mongoose = require('mongoose');
const axios = require('axios')
const Track = mongoose.model('Track');
var config = require('../config');
const { sendJSONresponse } = require('../request.js')

/* GET api/tracks/search/name */
const tracksSearchSpotify = async (req, res) => {
    try {
        const response = await axios.get(`https://api.spotify.com/v1/search?type=track&q=${req.params.search}`, {
            headers: {
                Authorization: `Bearer ${config.TOKEN_SECRET_SPOTIFY}`
            }
        })
        sendJSONresponse(res, 200, response.data)
    } catch (error) {
        console.error(`Error al obtener la información de la canción: ${error.message}`);
        sendJSONresponse(res, 400, {
            "error": {
                "code": "400",
                "message": "La solicitud es incorrecta. Verifique que la información proporcionada sea válida y esté completa."
            }
        })
    }
};

/* GET api/tracks/ */
const trackGetOne = async (req, res) => {
    try {
        const name = req.params.name;
        const regex = new RegExp(name, 'i');
        const track = await Track.findOne({ name: regex });
        if (!track) {
            return res.status(404).send('No se encontró la pista con el nombre especificado.');
        }
        sendJSONresponse(res, 200, track)
    } catch (err) {
        sendJSONresponse(res, 500, err)
    }
};

/* GET api/tracks/ */
const trackGetAll = async (req, res) => {
    try {
        const name = req.params.name;
        const regex = new RegExp(name, 'i');
        const track = await Track.find({ name: regex });
        if (!track) {
            return res.status(404).send('No se encontró la pista con el nombre especificado.');
        }
        sendJSONresponse(res, 200, track)
    } catch (err) {
        sendJSONresponse(res, 500, err)
    }
};

/* POST api/tracks/ */
const trackInsert = async (req, res) => {
    try {
        const track = new Track(req.body);
        await track.save();
        sendJSONresponse(res, 201, track)
    } catch (err) {
        sendJSONresponse(res, 400, err)
    }
};

/* PUT api/tracks/ */
const trackUpdate = async (req, res) => {
    try {
        const trackId = req.params.id;
        const updatedTrack = await Track.findOneAndUpdate({ _id: trackId }, req.body, {
            new: true,
            runValidators: true
        });
        if (!updatedTrack) {
            return res.status(404).send('No se encontró ningún Track con el ID proporcionado.');
        }
        sendJSONresponse(res, 200, updatedTrack)
    } catch (err) {
        sendJSONresponse(res, 500, err)
    }
};

/* DELETE api/tracks/ */
const trackDelete = async (req, res) => {
    try {
        const trackId = req.params.id;
        const deletedTrack = await Track.findOneAndDelete({ _id: trackId });
        if (!deletedTrack) {
            return res.status(404).send('No se encontró ningún Track con el ID proporcionado.');
        }
        sendJSONresponse(res, 200, deletedTrack)
    } catch (err) {
        sendJSONresponse(res, 500, err)
    }
};

module.exports = {
    tracksSearchSpotify,
    trackInsert,
    trackGetOne,
    trackGetAll,
    trackUpdate,
    trackDelete
};