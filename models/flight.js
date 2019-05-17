var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {type: String, enum: ['AUS','DAL','LAX','SEA']},
    arrival: {type: Date, default: function(){
        return new Date();
    }}
});

var flightSchema = new Schema({
    airline: {type: String, enum: ['American','Southwest','United']},
    flightNo: {type: Number, min: 10, max: 9999},
    airport: {type: String, enum: ['AUS','DAL','LAX','SEA'], default: 'SEA'},
    destinations: [destinationSchema],
    departs: {type: Date, default: function(){
        let date = new Date();
        return new Date(date.getFullYear() + 1, date.getMonth(), date.getDate());
    }}
});

module.exports = mongoose.model('Flight', flightSchema);

