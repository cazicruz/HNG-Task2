const { Person } = require('../Models/personModel');

/*const getAll = async () =>{
  const persons = await  Person.find();
  return res.status(200).json(persons)
}*/

const getPerson = async (req, res) => {

  let { name } = req.body;
  
  
  if (!name) {
    name = req.params.name;
    if (!name) {
      const persons = await Person.find().select("-__v").exec();
      if (persons) { return res.status(200).json(persons) }
      else { return res.status(404) }
    }      
  }
  if (typeof name !== "string") {
    return res.status(400).json({ error: "invalid format" });
  }
  const person = await Person.findOne({ name }).select("-__v").exec();
  if (person) {
    return res.status(200).json({id:person.id,
                                  name:person.name});
  } else {
    return res.status(400).json({ msg: "no user found" })
  }
};



const createPerson = async (req, res) => {
  let { name } = req.body;

  if (!name) {
    name = req.params.name;
    if (!name) {
      return res.status(400).json({ error: "Invalid Request" });
    }
  }
  if (name) {
    if (typeof name === "string") {
      let person = await Person.findOne({ name:name }).exec();
      if (person) {
        return res.status(400).json({ error: "user already exists" })
      }
      person = await Person.create({ name });
      if(!person){return res.status(400).json({error:"user not created"})}
      return res.status(200).json({id:person.id,
                                  name:person.name});
    }
  }
  return res.status(400);
}

const updatePerson = async (req, res) => {
  let { name, newName } = req.body;
  
  if (!name || !newName) {
    name = req.params.name;
    newName = req.params.newName;
    if (!name || !newName) {
      return res.status(400).json({ error: 'invalid request' });
    }
  }
  
  if (name && newName) {
    const person = await Person.findOne({ name }).exec();
    if (!person) {
      return res.status(404).json({ message: "user not found" });
    };
    person.name = newName;
    person.save();
    return res.status(200).json({id:person.id,
                                  name:person.name});
  }
  return res.status(400).json({ error: 'invalid request' });
}


const deletePerson = async (req, res) => {
  let { name } = req.body;
  
  if (!name) {
    name = req.params.name;
    if (!name) {
      return res.status(400).json({ error: "Invalid Request" });
    }
  }
  
  if (name) {
    const nameToDelete = await Person.findOne({ name }).exec();
    if (!nameToDelete) {
      return res.status(404).json({ error: "user not found" });
    }
    const person = await  Person.findOneAndDelete({ name })
    return res.status(200).json({id:person.id,
                                  name:person.name});
  }
  return res.status(400).json({ error: "Invalid Request" });
}

module.exports = { getPerson, updatePerson, createPerson, deletePerson };