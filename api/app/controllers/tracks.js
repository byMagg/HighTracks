const mongoose = require('mongoose');
const axios = require('axios')
const Track = mongoose.model('Track');
var config = require('../config');

const sendJSONresponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

/* GET api/tracks/search */
const tracksSearchSpotify = async (req, res) => {
    try {
        const response = await axios.get(`https://api.spotify.com/v1/search?type=track&q=${req.params.search}`, {
            headers: {
                Authorization: `Bearer ${config.TOKEN_SECRET}`
            }
        })
        res.status(200).send(response.data);
    } catch (error) {
        console.error(`Error al obtener la información de la canción: ${error.message}`);
        res.status(400).send({
            "error": {
                "code": "400",
                "message": "La solicitud es incorrecta. Verifique que la información proporcionada sea válida y esté completa."
            }
        })
    }
};

/* POST api/tracks/ */
const trackInsert = async (req, res) => {
    try {
        const track = new Track(req.body);
        await track.save();
        res.status(201).send(track);
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports = {
    tracksSearchSpotify,
    trackInsert
};