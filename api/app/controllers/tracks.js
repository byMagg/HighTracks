const mongoose = require('mongoose');
const axios = require('axios')
const Track = mongoose.model('Track');
const config = require('../config');
const { sendJSONresponse } = require('../request.js')
const { ObjectId } = mongoose.Types;

/* GET api/search/:name */
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
        console.error(error);
        sendJSONresponse(res, 400, {
            "error": {
                "code": "400",
                "message": "La solicitud es incorrecta. Verifique que la información proporcionada sea válida y esté completa."
            }
        })
    }
};

const trackGetOneById = async (req, res) => {
    try {
        const id = req.params.id;
        const track = await Track.findOne({ _id: id });
        if (!track) {
            return sendJSONresponse(res, 404, 'No se encontró la pista con el id especificado.');
        }
        sendJSONresponse(res, 200, track)
    } catch (err) {
        sendJSONresponse(res, 500, err)
    }
};

/* GET api/tracks */
const trackGetAll = async (req, res) => {
    try {
        const track = await Track.find({});
        if (!track) {
            return sendJSONresponse(res, 404, 'No se encontró la pista con el nombre especificado.');
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
        if (err.code === 11000) {
            sendJSONresponse(res, 400, 'Ya existe una pista con el ID especificado.');
        }
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
            return sendJSONresponse(res, 404, 'No se encontró la pista con el ID especificado.');
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
            return sendJSONresponse(res, 404, 'No se encontró la pista con el ID especificado.');
        }
        sendJSONresponse(res, 200, deletedTrack)
    } catch (err) {
        sendJSONresponse(res, 500, err)
    }
};

const trackInsertComment = async (req, res) => {
    try {
        const trackId = req.params.id;

        if (!ObjectId.isValid(trackId)) {
            return sendJSONresponse(res, 400, 'Invalid track ID');
        }

        const track = await Track.findById(trackId);
        if (!track) {
            return sendJSONresponse(res, 404, 'No se encontró la pista con el ID especificado.');
        }

        const { author, text, score } = req.body;
        const comment = { author, text, score };
        track.comments.push(comment);

        const updatedTrack = await track.save();
        sendJSONresponse(res, 201, updatedTrack);
    } catch (error) {
        sendJSONresponse(res, 500, error)
    }
}

module.exports = {
    tracksSearchSpotify,
    trackInsertComment,
    trackInsert,
    trackGetOneById,
    trackGetAll,
    trackUpdate,
    trackDelete
};