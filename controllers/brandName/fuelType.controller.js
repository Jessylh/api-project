const FuelType = require('../../models/cars/fuelType')
const { CODE_5, CODE_404} = require('../../constants/Error_CODE')



//fuelType
exports.createFuelType = async function (req, res) {
    try {
        const { type } = req.body;
        if (!type) {
            res.status(400).json(CODE_5)
        } else {
            const fuelType = new FuelType(null, type)
            await fuelType.save()
            res.status(200).json(fuelType)
        }
    } catch (e) {
        console.error('Error inserting in database =>', e)
    }
}

exports.getAllFuelType = async function (req, res) {
    try {
        const fuelType = await FuelType.getAll()
        res.status(200).json(fuelType)
    } catch (e) {
        console.error('Error retrieving from database =>', e)
    }
}

exports.getSingleFuelType = async function (req, res) {
    try {
        const {fuelTypeId} = req.params; 
        const fuelType = await FuelType.getSingle(fuelTypeId)
        if(!fuelType) {
            res.status(400).json(CODE_5)
        } else {
            res.status(200).json(fuelType)
        }
    } catch (e) {
        console.error('Error retrieving from database =>', e)
    }
}

exports.updateFuelType = async function (req, res) {
    try {
        const {fuelTypeId} = req.params; 
        const fuelType = await FuelType.getSingle(fuelTypeId)
        if(!fuelType) {
            res.status(400).json(CODE_5)
        } else {
            const {type} = req.body; 
            await FuelType.updateSingle(fuelTypeId, type)
            delete fuelType.type
            const newFuelType = {
                ...fuelType,
                type
            }
            res.status(200).json(newFuelType)
        }
    } catch (e) {
        console.error('Error retrieving from database =>', e)
    }
}

exports.deleteFuelType = async function (req, res) {
    try {
        const {fuelTypeId} = req.params
        const fuelType = await FuelType.getSingle(fuelTypeId)
        if(!fuelType) {
            res.status(404).json(CODE_404)
        } else {
            await FuelType.delete(fuelTypeId)
            res.status(204).send('OK')
        }
    } catch (e) {
        console.error('Error retrieving from database =>', e)
    }
}