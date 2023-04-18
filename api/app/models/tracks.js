const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
    FHRSID: { type: Number, required: true },
    BusinessName: String,
    BusinessType: String,
    RatingDate: [String],
    Scores: {
        Higiene: Number,
        Structural: Number,
        ConfidenceInManagement: Number,
    },
});

mongoose.model('Track', trackSchema);