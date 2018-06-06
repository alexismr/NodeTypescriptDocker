var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hospitalSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: [true, 'El nombre es necesario'] },
    stars: { type: Number, required: false },
    price: { type: String, required: true },
    amenities: { type: [] }
}, { collection: 'hotels' });

module.exports = mongoose.model('hotel', hospitalSchema);