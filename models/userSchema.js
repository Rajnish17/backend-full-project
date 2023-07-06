const mongoose = require('mongoose');
const User = mongoose.Schema;

const UserSchema = new User({
    name: { type: String},
    email: { type: String},
    password:{ type: String},


    // currentPassword:{ type: String},//schema is  not required for update password
    // newPassword:{ type: String},

  }, {
    timestamps: true,
  });
  
  module.exports =mongoose.model('User', UserSchema);