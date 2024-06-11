const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://sadafhameed:mern123@cluster0.fsvtyip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('connected');
    
    const fetchedData = mongoose.connection.db.collection('food_items');
    fetchedData.find({}).toArray((err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  } catch (err) {
    console.log('---', err);
  }
};

module.exports = mongoDB;
