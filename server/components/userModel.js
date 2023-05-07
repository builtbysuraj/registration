const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

const User = mongoose.model("User", userSchema, 'mycollection')

module.exports = User