const mongoose = require('mongoose');

const partsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // carModel: {
    //     type: String,
    //     required: true
    // },
    price: {
        type: Number,
        required: true
    }
});

const Parts = mongoose.model('Parts', partsSchema);

module.exports = Parts;
