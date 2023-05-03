const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const commentSchema = new mongoose.Schema({
    _id: { type: ObjectId, auto: true },
    author: { type: String, required: true },
    text: { type: String, required: true },
    score: Number,
});

const trackSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    album: {
        id: String,
        name: String,
        artists: [{
            _id: false,
            id: String,
            name: String,
        }],
        images: [{
            _id: false,
            height: Number,
            url: String,
            width: Number,
        }],
        release_date: String,
        release_date_precision: String,
        total_tracks: Number,
    },
    name: String,
    duration_ms: Number,
    comments: [commentSchema]
});

mongoose.model('Track', trackSchema);