const URL = require("dotenv")
URL.config()

const db = process.env.MONGO_URI
module.exports = db