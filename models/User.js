const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: {type: Number, default: 0}
});

mongoose.model('users', userSchema);

//we're creating models using mongoose to define the schema and add data to the database