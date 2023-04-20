const axios = require('axios')
var config = require('../config');

const sendJSONresponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};


/* GET api/generate_token */
const generateToken = async (req, res) => {
    try {
        const response = await axios.post(`https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`,)
        config.TOKEN_SECRET = response.data.access_token
        sendJSONresponse(res, 200, config.TOKEN_SECRET)
    } catch (error) {
        console.log(error)
    }
};


module.exports = {
    generateToken,
};