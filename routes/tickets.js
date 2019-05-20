var express = require('express');
var router = express.Router();

var ticketsController = require('../controllers/tickets');


router.get('/tickets/new', ticketsController.new);

router.post('/tickets/', ticketsController.create);


module.exports = router;