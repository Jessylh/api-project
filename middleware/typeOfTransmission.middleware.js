const TypeOfTransmission = require('../models/cars/typeOfTransmission')
const {CODE_6, CODE_404} = require('../constants/Error_CODE')


exports.validateIfTypeOfTransmissionExistById = async (req, res, next) => {
    try {
        const { typeOfTransmissionId } = req.params;
        const typeOfTransmission = await TypeOfTransmission.getSingle(typeOfTransmissionId);

        if (!typeOfTransmission) {
            return res.status(400).json(CODE_6);
        }
        
        next();
    } catch (e) {
        console.error('Error retrieving from database =>', e);
        res.status(400).json(CODE_6);
    }
}

/* 
exports.validateIfTypeOfTransmissionExistById =  async(req, res, next) => {
    
    try {
    const {typeOfTransmissionId} = req.params
    if(!typeOfTransmissionId) {
         res.status(400).json(CODE_6)
    } else  {
        next()
    } 
} catch (e) {
    console.error('Error retrieving from database =>', e)
}
}
 */

exports.validateIfTypeOfTransmissionExistById = (req, res, next) => {
    const { typeOfTransmissionId } = req.params;
    if (!typeOfTransmissionId) {
        return res.status(400).json(CODE_6);
    } 
    next();
}
  