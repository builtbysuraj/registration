const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
const userRoutes = require('./components/userRoutes');
const URL = require("./components/config")
app.use('/api/users', userRoutes);

// MongoDB
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Database successfully connected'))
  .catch(error => console.error('Database could not be connected:', error));

// Express 
app.listen(5005, console.log("Express working"))
