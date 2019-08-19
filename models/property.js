const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    propertyName: { type: String, required: true, minlength: 1, maxlength: 200 },
    location: ({
        city: {type: String, required: true},
        state: {type: String, required: true}
    }),
    photos: [String]
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;