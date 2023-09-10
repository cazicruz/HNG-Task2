const Express = require('express');
const router = Express.Router();
const {getPerson, } = require('../Controllers/personController');

router.get('/',getPerson);

router.get('/Persons',);
router.post('/');
router.put('/')

module.exports = router;