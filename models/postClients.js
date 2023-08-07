const mongoose = require('mongoose');

const clientsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    carModel: {
        type: String,
        required: true
    },
    client_email: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    repairs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Repair'
        }
    ],
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Client = mongoose.model('Client', clientsSchema);

module.exports = Client;
