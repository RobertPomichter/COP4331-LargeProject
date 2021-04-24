const mongoose = require('mongoose');
const uuidv1 = require('uuidv1');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: String,
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date,
    photo: {
        data: Buffer,
        contentType: String
    },
    about: {
        type: String,
        trim: true
    },
    resetPasswordLink: {
        data: String,
        default: ""
    }
});

// virtual field
userSchema.virtual("password")
.set( function(password) {
    // temporary password variable
    this._password = password;
    // generate the timestamp
    this.salt = uuidv1();
    // encrypt the password
    this.hashed_password = this.encryptPassword(password);
})
.get( function() {
    return this._password
});

// methods
userSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password
    },

    encryptPassword: function(password){
        if(!password) return "";
        try {
            return crypto.createHmac('sha256', this.salt)
                .update(password)
                .digest('hex');
        } catch(err) {
            return "";
        }
    }

};

module.exports = mongoose.model("User", userSchema);
