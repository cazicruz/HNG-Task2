const { Person } = require('../Models/personModel');

/*const getAll = async () =>{
  const persons = await  Person.find();
  return res.status(200).json(persons)
}*/

const getPerson = async (req, res) => {

  let { name } = req.body;

  if (!name) {
    name = req.query.name;
    if (!name) {
      const persons = await Person.find().exec();
      if (persons) { return res.status(200).json(persons) }
      else { return res.status(404) }
    }
  }
  if (typeof name !== "string") {
    return res.status(400).json({ error: "invalid format" });
  }
  const person = await Person.findOne({ name });
  if (person) {
    return res.status(200).json(person);
  } else {
    return res.status(400).json({ msg: "no user found" })
  }
};



const createPerson = async (req, res) => {
  const { name } = req.body;
  if (name) {
    if (typeof name === "string") {
      const person = Person.findOne({ name: 'name' });
      if (person) {
        return res.status(400)
      }
      person = await Person.create({ name }, (err, data) => {
        if (err) { return res.status(400).json({ error: "error creating record" }) }
      });
      console.log(person);
      return res.status(200);
    }
  }
  return res.status(400);
}

const updatePerson = async (req, res) => {
  const { name, newName } = req.body;
  if (name && newName) {
    const person = Person.findOne({ name }).exec();
    if (!person) {
      return res.status(404).json({ message: "user not found" });
    };
    person.name = newName;
    person.save();
    return res.status(204);
  }
  return res.status(400).json({ error: 'invalid request' });
}


const deletePerson = (req, res) => {
  const { name } = req.body;
  if (name) {
    person = Person.deleteOne({ name })
    console.log(person)
    return res.status(200).json({person});
  }
  return res.status(400).json({ error: "Invalid Request" });
}

module.exports = { getPerson, updatePerson, createPerson, deletePerson };