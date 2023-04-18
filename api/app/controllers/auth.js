const axios = require('axios')

// this can be used as a seperate module
const encodeFormData = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
}

const sendJSONresponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

/* GET api/tracks/trackid */
const login = async (req, res) => {
    axios.post(`https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`,)
        .then(function (response) {
            console.log(response.data.access_token);
        })
        .catch(function (error) {
            console.log(error);
        });
};

module.exports = {
    login,
    // logged
};