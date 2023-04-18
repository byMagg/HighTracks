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
const tracksReadOne = async (req, res) => {
    try {
        const response = await axios.get(`https://api.spotify.com/v1/tracks/${req.params.tracksid}`, {
            headers: {
                Authorization: `Bearer ${config.TOKEN_SECRET}`
            }
        })
        sendJSONresponse(res, 200, response.data)
    } catch (error) {
        console.log(error)
        sendJSONresponse(res, 400, "Error")
    }
};

module.exports = {
    tracksReadOne,
};