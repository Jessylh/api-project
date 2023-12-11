const EngineCapacity = require('../../models/cars/engineCapacity.model')
const { CODE_4, CODE_404} = require('../../constants/Error_CODE')


//engineCapacity
exports.createEngineCapacity = async function (req, res) {
    try {
        const { capacity } = req.body;
        if (!capacity) {
            res.status(400).json(CODE_4)
        } else {
            const engineCapacity = new EngineCapacity(null, capacity)
            await engineCapacity.save()
            res.status(200).json(engineCapacity)
        }
    } catch (e) {
        console.error('Error inserting in database =>', e)
    }
}

exports.getAllEngineCapacity = async function (req, res) {
    try {
        const engineCapacity = await EngineCapacity.getAll()
        res.status(200).json(engineCapacity)
    } catch (e) {
        console.error('Error retrieving from database =>', e)
    }
}

exports.getSingleEngineCapacity = async function (req, res) {
    try {
        const {engineCapacityId} = req.params; 
        const engineCapacity = await EngineCapacity.getSingle(engineCapacityId)
        if(!engineCapacity) {
            res.status(400).json(CODE_4)
        } else {
            res.status(200).json(engineCapacity)
        }
    } catch (e) {
        console.error('Error retrieving from database =>', e)
    }
}

exports.updateEngineCapacity = async function (req, res) {
    try {
        const {engineCapacityId} = req.params; 
        const engineCapacity = await EngineCapacity.getSingle(engineCapacityId)
        if(!engineCapacity) {
            res.status(400).json(CODE_4)
        } else {
            const {capacity} = req.body; 
            await EngineCapacity.updateSingle(engineCapacityId, capacity)
            delete engineCapacity.capacity
            const newEngineCapacity = {
                ...engineCapacity,
                capacity
            }
            res.status(200).json(newEngineCapacity)
        }
    } catch (e) {
        console.error('Error retrieving from database =>', e)
    }
}

exports.deleteEngineCapacity = async function (req, res) {
    try {
        const {engineCapacityId} = req.params; 
        const engineCapacity = await EngineCapacity.getSingle(engineCapacityId)
        if(!engineCapacity) {
            res.status(404).json(CODE_404)
        } else {
            await EngineCapacity.delete(engineCapacityId)
            res.status(204).send('OK')
        }
    } catch (e) {
        console.error('Error retrieving from database =>', e)
    }
}