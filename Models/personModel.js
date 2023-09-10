const mongoose = require('mongoose');
const Schema = mongoose.Schema();


const personSchema = new Schema({
  name: { type: String },
  age: Number,

})

const Person = mongoose.Model('Person', personSchema);

module.exports = Person;