const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://ryanjamesscott6:<WONDERM05/>@ryclustor.m1v1tns.mongodb.net/';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    // Continue with your application logic here
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err.message);
  });
