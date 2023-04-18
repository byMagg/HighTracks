const mongoose = require('mongoose');
const track = mongoose.model('Track');

const sendJSONresponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};
/* GET api/tracks/trackid */
const tracksReadOne = (req, res) => {
    track
        .findById(req.params.trackid)
        .exec((err, track) => {
            if (!track) {
                return sendJSONresponse(res, 404, { "message": "track not found" });
            } else if (err) {
                return sendJSONresponse(res, 404, err);
            }
            sendJSONresponse(res, 200, track);
        });
};

module.exports = {
    tracksReadOne,
};