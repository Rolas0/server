const express = require('express');
const {
    // getData,
    createClient,
    getServices,
    postServices,
    getRepair,
    postRepair,
    getPart,
    postPart,
    updateClient,
    deleteClient,
    deleteService,
    deletePart,
    getClientsTrue,
    getClientsFalse
} = require('../dataFetchs/fetch.js');

const router = express.Router();

// Clients
router.get('/clients', getClientsTrue);
router.get('/history', getClientsFalse);
router.post('/clients', createClient);
router.put('/:clientId', updateClient);
router.delete('/:id', deleteClient);

// Services
router.get('/services', getServices);
router.post('/services', postServices);
router.delete('/services/:id', deleteService);

//Repair
router.get('/repairs/:clientId', getRepair);
router.post('/repairs', postRepair);

//Parts
router.get('/parts', getPart);
router.post('/parts', postPart);
router.delete('/parts/:id', deletePart);

module.exports = router;
