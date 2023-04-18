const mongoose = require('mongoose');
const track = mongoose.model('Track');

const sendJSONresponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

/* GET api/tracks */
const tracksReadAll = (req, res) => {
    track
        .find({})
        .exec((err, tracks) => {
            if (!tracks) {
                sendJSONresponse(res, 404, { "message": "tracks not found" });
            } else if (err) { sendJSONresponse(res, 404, err); }
            else {
                sendJSONresponse(res, 200, tracks);
            }
        });
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

const tracksUpdateOne = (req, res) => {
    // if (!req.body) return sendJSONresponse(res, 404, { "message": "nothing to update" })
    track
        .findByIdAndUpdate(req.params.trackid,
            req.body)
        .exec((err, track) => {
            //TODO add body verification
            if (!track) {
                return sendJSONresponse(res, 404, { "message": "track not found" });
            } else if (err) {
                return sendJSONresponse(res, 404, err);
            }
            sendJSONresponse(res, 200, track);
        })
}


module.exports = {
    tracksReadAll,
    tracksReadOne,
    tracksUpdateOne
};