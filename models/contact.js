const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  "gender": { type: String, required: true },
  "name": {
  "title": String,
  "first": { type: String, required: true },
  "last": { type: String, required: true }
  },
  "location": {
  "street": String,
  "city": String,
  "state": String,
  "postcode": { type: Number, min: 5, max: 5}
  },
  "email": String,
  "dob": Date,
  "phone": Number,
  "cell": String,
  "picture": {
  "large": String,
  "medium": String,
  "thumbnail": String
  }

})
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
