const client = require('../models/postClients.js');
const service = require('../models/postServices.js');
const repair = require('../models/postRepair.js');
const part = require('../models/postParts.js');

// Clients

// async function getData(request, response) {
//     const { status } = request.query;
//     try {
//         if (status === 'false') {
//             const clients = await client.find({ status: false });
//             return response.status(200).json(clients);
//         } else if (status === 'true') {
//             const clients = await client.find({ status: true });
//             return response.status(200).send(clients);
//         } else {
//         const clients = await client.find();
//         return response.status(200).send(clients);
//         }
//     } catch (error) {
//         response.status(500).json({ message: error.message });
//     }
// }

async function getClientsTrue(request, response) {
    try {
        const clients = await client.find({ status: false });
        return response.status(200).send(clients);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}
async function getClientsFalse(request, response) {
    try {
        const clients = await client.find({ status: true });
        return response.status(200).send(clients);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

async function createClient(request, response) {
    const post = request.body;
    const newPost = new client(post);
    try {
        await newPost.save();
        return response.status(201).json(newPost);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

async function deleteClient(request, response) {
    const { id } = request.params;

    try {
        const clientDelete = await client.findByIdAndDelete(id);
        return response.status(200).send(clientDelete);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

async function updateClient(request, response) {
    const { clientId } = request.params;

    try {
        const clientUpdate = await client.findByIdAndUpdate(
            clientId,
            { status: true },
            { new: true }
        );

        return response.status(200).send(clientUpdate);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

/// Services

async function getServices(request, response) {
    try {
        const Services = await service.find();

        return response.status(200).send(Services);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

async function postServices(request, response) {
    const post = request.body;
    const newPost = new service(post);
    try {
        await newPost.save();
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

async function deleteService(request, response) {
    const { id } = request.params;

    try {
        const serviceDelete = await service.findByIdAndDelete(id);
        return response.status(200).send(serviceDelete);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

//Repair

async function getRepair(request, response) {
    const { clientId } = request.params;

    try {
        const repairs = await repair
            .find({ clientId })
            .populate('clientId')
            .populate('serviceId')
            .populate('partsUsed')
            .exec();

        return response.status(200).send(repairs);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

async function postRepair(request, response) {
    const post = request.body;
    const newPost = new repair(post);
    try {
        await newPost.save();
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

//Parts

async function getPart(request, response) {
    try {
        const Part = await part.find();

        return response.status(200).send(Part);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

async function postPart(request, response) {
    const post = request.body;
    const newPost = new part(post);
    try {
        await newPost.save();
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

async function deletePart(request, response) {
    const { id } = request.params;

    try {
        const partDelete = await part.findByIdAndDelete(id);
        return response.status(200).send(partDelete);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

module.exports = {
    // getData,
    createClient,
    updateClient,
    deleteClient,
    getServices,
    postServices,
    deleteService,
    getRepair,
    postRepair,
    getPart,
    postPart,
    deletePart,
    getClientsTrue,
    getClientsFalse
};
