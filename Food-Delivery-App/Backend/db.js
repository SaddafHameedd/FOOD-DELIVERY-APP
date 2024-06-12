const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://sadafhameed:mern123@cluster0.fsvtyip.mongodb.net/GoFoodMern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');

    const fetchedData = mongoose.connection.db.collection('food_items');
    const data = await fetchedData.find({}).toArray();
    // console.log('Data fetched from food_items collection:', data);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

module.exports = mongoDB;
