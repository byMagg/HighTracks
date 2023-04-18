const axios = require('axios')

const sendJSONresponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

const token = ""
/* GET api/generate_token */
const generateToken = async (req, res) => {
    axios.post(`https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`,)
        .then(function (response) {
            sendJSONresponse(res, 200, response.data.access_token)
        })
        .catch(function (error) {
            console.log(error);
        });
};

module.exports = {
    generateToken,
    token
    // logged
};