const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: String,
    duration_ms: Number,
    images: [{
        height: Number,
        url: String,
        width: Number
    }],
    artists: [{
        id: Number,
        external_urls: [{ spotify: String }],
        name: String,
    }],
    external_urls: [{ spotify: String }],
    comments: [{
        author: { type: String, required: true },
        text: String,
        score: Number,
    }]
});

mongoose.model('Track', trackSchema);