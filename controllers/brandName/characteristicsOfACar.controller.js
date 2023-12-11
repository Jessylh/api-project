const { ObjectId } = require("mongodb")

const CharacteristicsOfACar = require("../../models/cars/characteristicsOfACar.model")

const BrandName = require("../../models/cars/brandName.model")

const EngineCapacity = require("../../models/cars/engineCapacity.model")

const FuelType = require("../../models/cars/fuelType")

const TypeOfTransmission = require("../../models/cars/typeOfTransmission")

const Year = require("../../models/cars/year")

const { CODE_1, CODE_2, CODE_3, CODE_4, CODE_5, CODE_6,CODE_404 } = require("../../constants/Error_CODE");



//brandNameId, yearId, engineCapacityId, fuelTypeId, typeOfTransmissionId

exports.createCharacteristicsOfACar = async function (req, res) {
    try {
        const { brandNameId, yearId, engineCapacityId, fuelTypeId, typeOfTransmissionId } = req.body

        if (!(brandNameId && yearId && engineCapacityId && fuelTypeId && typeOfTransmissionId)) {
            res.status(400).json(CODE_1)
            return;
        }

        

        const brandName = await BrandName.getSingle(brandNameId)
        if (!brandName) {
            res.status(400).json(CODE_3)
            return
        }

        const year = await Year.getSingle(yearId);
        if (!year) {
            res.status(400).json(CODE_2)
            return
        }

        const engineCapacity = await EngineCapacity.getSingle(engineCapacityId)
        if (!engineCapacity) {
            res.status(400).json(CODE_4)
            return;
        }

        const fuelType = await FuelType.getSingle(fuelTypeId);
        if (!fuelType) {
            res.status(400).json(CODE_5)
            return;
        }

        const typeOfTransmission = await TypeOfTransmission.getSingle(typeOfTransmissionId)
        if (!typeOfTransmission) {
            res.status(400).json(CODE_6)
            return;
        }

        const characteristicsOfACar = new CharacteristicsOfACar(null, brandNameId, yearId, engineCapacityId, fuelTypeId, typeOfTransmissionId)
        await characteristicsOfACar.save()
        res.status(200).json(characteristicsOfACar)
    } catch (e) {
        console.error('Error inserting in database =>', e)
        res.status(500).json({ error: 'Server error' })
    }
}




//Haciendo el getAll
exports.getAllcharacteristicsOfACar = async function (req, res) {
    try {
        const list = await CharacteristicsOfACar.getAll();
        res.status(200).json(list)
    } catch (e) {
        console.error('Error pulling from database=>', e)
    }
}


//Haciendo el getSingle
exports.getSingleCharacteristicsOfACar = async function (req, res) {
    try {
        const {characteristicsOfACarId} = req.params; 
        const characteristicsOfACar = await CharacteristicsOfACar.getSingleById(characteristicsOfACarId)
        if (!characteristicsOfACar) {
            res.status(404).json(CODE_404)
        } else {
            res.status(200).json(characteristicsOfACar)
        }
    } catch (e) {
        console.error('Error pulling from database=>', e)
    }
}

//Me falta hacer el update


//Haciendo el delete
exports.deleteSingleCharacteristicsOfACar = async function (req, res) {
    try {
        const {characteristicsOfACarId} = req.params
        const characteristicsOfACar = await CharacteristicsOfACar.getSingleById(characteristicsOfACarId)
        if (!characteristicsOfACar) {
            res.status(404).json(CODE_404)
        } else {
            await CharacteristicsOfACar.deleteSingle(characteristicsOfACarId)
            res.status(204).send('OK')
        }
    } catch (e) {
        console.error('Error pulling from database=>', e)
    }
}




















/* 
exports.createCharacteristicsOfACar = async function (req, res) {
    try {
        const { brandNameId, yearId, engineCapacityId, fuelTypeId, typeOfTransmissionId} = req.body
        if (!(brandNameId && yearId && engineCapacityId && fuelTypeId, typeOfTransmissionId)) {
            res.status(400).json(CODE_1)
        } else {
            if (isNaN(yearId)) {
                res.status(400).json(CODE_2)
            } else {
                const brandName = await BrandName.getSingle(brandNameId);
                if (!brandName) {
                    res.status(400).json(CODE_3)
                } else {
                    const year = await Year.getSingle(yearId);
                    if (!year) {
                        res.status(400).json(CODE_2)

                    } else {
                        const engineCapacity = await EngineCapacity.getSingle(engineCapacityId);
                        if (!engineCapacity) {
                            res.status(400).json(CODE_4)

                        } else {
                            const fuelType = await FuelType.getSingle(fuelTypeId);
                            if (!fuelType) {
                                res.status(400).json(CODE_5)

                            } else {
                                const typeOfTransmission = await TypeOfTransmission.getSingle(typeOfTransmissionId);
                                if (!typeOfTransmission) {
                                    res.status(400).json(CODE_6)
                                    
                        const characteristicsOfACar = new CharacteristicsOfACar(null, brandNameId, parseInt(yearId), engineCapacityId, fuelTypeId, typeOfTransmissionId);
                        await characteristicsOfACar.save()
                        res.status(200).json(characteristicsOfACar)
                    }
                }
            }
        }
    } catch (e) {
        console.error('Error inserting in database =>', e)
    }
}
 */
