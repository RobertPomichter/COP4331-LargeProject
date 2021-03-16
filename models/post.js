const mongoose = require('mongoose');

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
        maxxlength: 2000
    }
});

module.exports = mongoose.model("Post", postSchema);
