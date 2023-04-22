const axios = require('axios')
var config = require('../config');
const jwt = require('jsonwebtoken');

const sendJSONresponse = (res, status, content) => {
    if (res === undefined) return;
    res.status(status);
    res.json(content);
};

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).send('No se proporcionó un token de autenticación.');

    try {
        const secret = config.TOKEN_SECRET;
        req.user = jwt.verify(token, secret);
        next();
    } catch (err) {
        res.status(401).send('Token de autenticación no válido.');
    }
}

// Función para generar un token JWT para un usuario
const generateToken = (user) => {
    console.log(user)
    const payload = {
        username: user.username
    };
    const secret = config.TOKEN_SECRET;
    const options = {
        expiresIn: '1h'
    };
    return jwt.sign(payload, secret, options);
}

/* POST api/login */
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        // const user = await User.findOne({ username });
        // if (!user || user.password !== password) {
        //     return res.status(401).send('Nombre de usuario o contraseña incorrectos.');
        // }
        const token = generateToken(req.body);
        res.send({ token });
    } catch (err) {
        res.status(500).send(err);
    }
};

/* GET api/generate_token */
const generateTokenSpotify = async (req, res) => {
    try {
        const response = await axios.post(`https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`,)

        if (response.status === 200) {
            const data = response.data;
            spotifyToken = data.access_token;
            config.TOKEN_SECRET_SPOTIFY = spotifyToken;
            console.log(`Token de Spotify actualizado: ${spotifyToken}`);
            setTimeout(generateToken, (data.expires_in - 60) * 1000);
            sendJSONresponse(res, 200, response.data)
        } else {
            console.error('Error al obtener el token de Spotify');
            setTimeout(generateToken, 60000);
            sendJSONresponse(res, 400, {
                "error": {
                    "code": "400",
                    "message": "La solicitud es incorrecta. Verifique que la información proporcionada sea válida y esté completa."
                }
            })
        }
    } catch (error) {
        console.error(`Error al obtener el token de Spotify: ${error.message}`);
        setTimeout(generateToken, 60000);
        sendJSONresponse(res, 400, {
            "error": {
                "code": "400",
                "message": "La solicitud es incorrecta. Verifique que la información proporcionada sea válida y esté completa."
            }
        })
    }
};

module.exports = {
    generateTokenSpotify,
    verifyToken,
    login
};