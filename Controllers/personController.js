const {Person} = require('../Models/personModel');

/*const getAll = async () =>{
  const persons = await  Person.find();
  return res.status(200).json(persons)
}*/
  
const getPerson = async (req, res) =>{

  const{ name} = req.body;
  const person;
  if (!name){
    name = req.query.name;
    if (!name){
      const persons = await  Person.find();
      return res.status(200).json(persons)
    }
  }
  if (typeof name !== "string"){
    return res.status(400).json({error: "invalid format" });
  }
  person = await Person.findOne({name})
};
const getAll = async () =>{
  const persons = await  Person.find();
  return res.status(200).json(persons)
}


const createPerson = async (req,res)=>{ 
  const {name} = req.body;
  if (name){
    if (typeof name === "string"){
    person = Person.create({name});
    return res.status(204);
    }
  }
}

const updatePerson = async (req,res)=>{
  const {name, newName } = req.body;
  if (name && newName ){
    const person = Person.findOne({name}).exec();
    if (!person){
      return res.status(404).json({message: "user not found"});
    };
    person.name= newName;
    person.save();
    return res.status(204);
  }
  return res.status(400).json({error: 'invalid request'});
}


const deletePerson = (req,res) => {
    const {name} = req.body;
  if (name){
    person = Person.findOneAndDelete({name},(err, deletedData)=>{
      if (err){
        return res.status(500).json({error: "error occurd while deleting document"})
        }
    })
    return res.status(200).json(person);
  }
  return res.status(400).json({error:"Invalid Request"});
}

module.exports = {getPerson,getAll, updatePerson, createPerson,deletePerson };