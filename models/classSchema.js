const mongoose = require('mongoose');
const Class = mongoose.Schema;

const ClassSchema = new Class({
    
        "Classname": String,
        "students": [
          {
            "name": String,
            "age": Number,
            "grade": String
          }
        ],
        "teacher": {
          "name": String,
          "subject": String
        }
      
  }, {
    timestamps: true,
  });
  
  module.exports =mongoose.model('Class', ClassSchema);