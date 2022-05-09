const { Schema, model } = require('mongoose');

const MovieSchema = Schema(
    {
        Title: {
            type: String,
            required: true
        },
        Year: {
            type: String,
            required: true
        },
        Type: {
            type: String,
            required: true
        },
        Poster: {
            type: String,
            required: true
        }
    }, { timestamps: true }
);

module.exports = model('Movie', MovieSchema);
