const mongoose = require('mongoose');
const axios = require('axios')
const track = mongoose.model('Track');
var config = require('../config');
const express = require('express');
const router = express.Router();
const ctrlAuth = require('../controllers/auth')

const sendJSONresponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};
/* GET api/tracks/trackid */
const tracksReadOne = async (req, res) => {
    try {
        const response = await axios.get(`https://api.spotify.com/v1/tracks/${req.params.tracksid}`, {
            headers: {
                Authorization: `Bearer ${config.TOKEN_SECRET}`
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

module.exports = {
    tracksReadOne,
};