var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticketSchema = new Schema({
    seat: {type: String, default: function(){
        //A1 THRU F99
    }},
    price: {type: Number, min: 0},
    flight: [{type: Schema.Types.ObjectId, ref: 'Flight'}]
});

module.exports = mongoose.model('Ticket', ticketSchema);
