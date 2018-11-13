const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type:String, unique: true, lowercase: true },
  passowrd: String,
});

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;