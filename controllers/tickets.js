var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res){
    Flight.findById(req.params.id, function(err, flight){
        res.render('tickets/new', {flight}); 
    });
}

function create(req,res){
    var ticket = new Ticket(req.body);
    ticket.save(function(err){
        if (err) return res.render('flights/');
        res.redirect(`/flights/`);
    });
}