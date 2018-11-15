const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')

const userSchema = new Schema({
  email: { type:String, unique: true, lowercase: true },
  password: String,
});

userSchema.pre('save', function(next){
  const user = this;
  bcrypt.genSalt(10, function(error, salt) {
    if (error) {
      return next(error)
    }
    bcrypt.hash(user.password, salt, null, function(error, hash) {
      if (error) {
        return next(error)
      }
      user.password = hash;
      next();
    })
  })
});

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;