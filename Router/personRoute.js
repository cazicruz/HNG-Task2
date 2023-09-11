const Express = require('express');
const router = Express.Router();
const { getPerson, updatePerson, createPerson, deletePerson } = require('../Controllers/personController');

router.route('/')
  .get(getPerson)
  .post(createPerson)
  .put(updatePerson)
  .delete(deletePerson)



module.exports = router;