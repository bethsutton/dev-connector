const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    // Section 2.7: add below as a second parameter for mongoose.connect
    // {useNewUrlParser: true, useCreateIndex: true}

    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(error.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
