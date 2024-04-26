const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);

const mongoURI = 'mongodb://localhost:27017' //process.env.mongoURI;
const connection = mongoose.connect(mongoURI)


module.exports = connection;
