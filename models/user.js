const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true, minlength: 1 },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    photos: ({
        url: {type: String}
    })
});

const User = mongoose.model("User", userSchema);

module.exports = User;