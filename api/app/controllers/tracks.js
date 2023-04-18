const mongoose = require('mongoose');
const { token } = require('./auth');
const axios = require('axios')
const track = mongoose.model('Track');
var config = require('../config');

const sendJSONresponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};
/* GET api/tracks/trackid */
const tracksReadOne = (req, res) => {
    axios.get(`https://api.spotify.com/v1/tracks/${req.params.tracksid}`, {
        headers: {
            Authorization: `Bearer ${config.TOKEN_SECRET}`
        }
    }
    )
        .then(function (response) {
            sendJSONresponse(res, 200, response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
};

module.exports = {
    tracksReadOne,
};