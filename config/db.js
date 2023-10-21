const mongoose = require('mongoose');
const config = require('config');
const db = 'mongodb+srv://santhosh:22mx222@cluster0.s0a9qqu.mongodb.net/devconnections';

// Connection to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
