const jwt = require('jsonwebtoken');

// Función para generar un token JWT para un usuario
export function generateToken(user) {
    const payload = {
        sub: user._id,
        username: user.username
    };
    const secret = process.env.JWT_SECRET;
    const options = {
        expiresIn: '1h'
    };
    return jwt.sign(payload, secret, options);
}