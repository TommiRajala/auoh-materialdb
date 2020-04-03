const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    min_density: {
        type: Number,
        required: true
    },
    max_density: {
        type: Number,
        required: true
    },
    min_strength: {
        type: Number,
        required: true
    },
    max_strength: {
        type: Number,
        required: true
    },
    min_strength_density: {
        type: Number,
        required: true
    },
    max_strength_density: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model("material", schema);
