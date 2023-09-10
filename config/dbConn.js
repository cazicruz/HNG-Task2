mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.connect(process.env['MONGO_URI'], {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;