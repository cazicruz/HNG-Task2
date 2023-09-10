const Express = require('express');
const router = Express.Router();
const {getPerson,getAll,updatePerson, createPerson,deletePerson} = require('../Controllers/personController');

router.route('/')
  .get(getPerson)
  .post(createPerson)
  .put(updatePerson)
  .delet(deletePerson)



module.exports = router;