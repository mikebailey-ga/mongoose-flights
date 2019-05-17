var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticketSchema = new Schema({
    seat: {type: String, default: function(){
        //A1 THRU F99
    }},
    price: {type: Number, min: 0},
    flight: {type: ObjectId, ref: 'Flight'}
});