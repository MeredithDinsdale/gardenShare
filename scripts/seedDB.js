const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Students collection and inserts the student below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gardenShare",{ useNewUrlParser: true }) ;


const propertySeed = [
  {
    propertyName: 'Test',
    location: ({
      city: 'test',
      state: 'test'
    })
  },
  {
    propertyName: 'Test2',
    location: ({
      city: 'test2',
      state: 'test2'
    })
  }

];

db.Property
 .remove({})
 .then(() => db.Property.collection.insertMany(propertySeed))
 .then(data => {
   console.log(data.result.n + " records inserted!");
   process.exit(0);
 })
 .catch(err => {
   console.error(err);
   process.exit(1);
 });