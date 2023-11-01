
const express = require('express')
const app = express()
require('dotenv').config()
var cors = require('cors')
const mongoose = require('mongoose');

MONGODB_URL= "mongodb+srv://truong0907:123456789Ht@cluster0.aq7f4jn.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
      await mongoose.connect(
        MONGODB_URL,
        { useNewUrlParser: true, useUnifiedTopology: true }
      )
      console.log('Connected to mongoDB')
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
}
  
connectDB()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())

const locationRoute = require('./api/routes/location.route');

app.use("/v1/api/location",locationRoute);

app.listen(process.env.PORT)