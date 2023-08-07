const mongoose = require('mongoose');

const repairsSchema = new mongoose.Schema({
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    partsUsed: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Parts'
        }
    ],
    price: {
        type: Number
    },
    description: {
        type: String
    }
});

const Repair = mongoose.model('Repair', repairsSchema);

module.exports = Repair;
