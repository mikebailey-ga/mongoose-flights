var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    new: newFlights,
    create,
    index,
    show,
    destination
}

function newFlights(req, res) {
    res.render('flights/new');
}

function create(req, res){
    var flight = new Flight(req.body);
    flight.save(function(err){
        if (err) return res.render('flights/new');
        res.redirect('flights/new');
    });
}

function index(req,res){
    Flight.find({}, function(err,flights){
        res.render('flights/index', {flights});
    });
}

function show(req, res){
    Flight.findById(req.params.id, function(err, flight){
        Ticket.find({flight: flight.id}, function(err, tickets){
            res.render('flights/show', {flight, tickets}); 
        })
    });
}

function destination(req, res){
    Flight.findById(req.params.id, function(err, flight){
        
        flight.destinations.push(req.body);
        flight.save(function(err){
            res.redirect(`/flights/${flight.id}`);
        });
    });
}