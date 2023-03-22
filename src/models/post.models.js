const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            unique: String,
            required: true
        },
        userId: {
            type: String,
            unique: String,
            required: true
        },
        post: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('post', postSchema)