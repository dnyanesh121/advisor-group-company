const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  interest: String,
  subject: String,
  message: String,
}, {
  timestamps: true
});

module.exports = mongoose.model(
  "Contact",
  ContactSchema
);
