const mongoose = require('mongoose');
const dotenv = require('dotenv');

mongoose.set("strictQuery", false);
dotenv.config();

const mongoURI = process.env.MONGODB_URI;

const connectToMongo = async () => {
  mongoose.connect(mongoURI).then(() => {
    console.log("Connected to Mongodb Successfully!");
  }).catch((error) => {
    console.log(error);
  });
};

module.exports = connectToMongo;