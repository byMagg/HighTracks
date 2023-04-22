const axios = require('axios')
var config = require('../config');

const sendJSONresponse = (res, status, content) => {
    if (res === undefined) return;
    res.status(status);
    res.json(content);
};

/* GET api/generate_token */
const generateToken = async (req, res) => {
    try {
        const response = await axios.post(`https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`,)

        if (response.status === 200) {
            const data = response.data;
            spotifyToken = data.access_token;
            config.TOKEN_SECRET = spotifyToken;
            console.log(`Token de Spotify actualizado: ${spotifyToken}`);
            setTimeout(generateToken, (data.expires_in - 60) * 1000);
            res.status(200).send(response.data);
        } else {
            console.error('Error al obtener el token de Spotify');
            setTimeout(generateToken, 60000);
            res.status(400).send({
                "error": {
                    "code": "400",
                    "message": "La solicitud es incorrecta. Verifique que la información proporcionada sea válida y esté completa."
                }
            })
        }
    } catch (error) {
        console.error(`Error al obtener el token de Spotify: ${error.message}`);
        setTimeout(generateToken, 60000);
        res.status(400).send({
            "error": {
                "code": "400",
                "message": "La solicitud es incorrecta. Verifique que la información proporcionada sea válida y esté completa."
            }
        })
    }
};

module.exports = {
    generateToken,
};