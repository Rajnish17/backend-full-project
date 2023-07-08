const mongoose = require('mongoose');
const Student = mongoose.Schema;

const StudentSchema = new Student({
    name:{type:String},      //name of student
    age: {type:Number},        // Age of the student
    gender:{type:String},     // Gender of the student
    grade: {type:String},      // Grade level of the student
    contact: {                 //Contact information of the student
        "email": String,    // Email address of the student
        "phone": Number     // Phone number of the student
      },
      address:{          // Address of the student
        "street": String,   // Street name
        "city": String,     // City name
        "state": String,    // State name
        "postalCode": String // Postal code
      },

   
  }, {
    timestamps: true,
  });
  
  module.exports =mongoose.model('Student', StudentSchema);