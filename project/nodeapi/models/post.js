const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is required",
        minlength: 1,
        maxxlength: 50
    },
    body: {
        type: String,
        required: "Body is required",
        minlength: 1,
        maxlength: 2000
    }, 
    photo: {
        type: Buffer,
        contentType: String
    },
    postedBy: {
        type: ObjectId,
        ref: "User"
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    }
});

module.exports = mongoose.model("Post", postSchema);
