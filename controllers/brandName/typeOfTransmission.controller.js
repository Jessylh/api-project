
const TypeOfTransmission = require('../../models/cars/typeOfTransmission')
const {CODE_6, CODE_404} = require('../../constants/Error_CODE')


//typeOfTransmission
exports.createTypeOfTransmission = async function (req, res) {
    try {
        const { type } = req.body
        const typeOfTransmission = new TypeOfTransmission(null, type)
        await typeOfTransmission.save()
        res.status(200).json(typeOfTransmission)
        }
     catch (e) {
        console.error('Error inserting in database =>', e)
    }
}

exports.getAllTypeOfTransmission = async function (req, res) {
    try {
        const typesOfTransmission = await TypeOfTransmission.getAll()
        res.status(200).json(typesOfTransmission)
    } catch (e) {
        console.error('Error retrieving from database =>', e)
    }
}









/* 
exports.getSingleTypeOfTransmission = async function (req, res) {
    try {
        const {typeOfTransmissionId} = req.params;
        const typeOfTransmission = await TypeOfTransmission.getSingle(typeOfTransmissionId) 
          if(!typeOfTransmission) {
            res.status(400).json(CODE_6)
        } else  
             res.status(200).json(typeOfTransmission)
        
    } catch (e) {
        console.error('Error retrieving from database =>', e)
    }
}
 

exports.getSingleTypeOfTransmission = async function (req, res) {
    try {
        const { typeOfTransmissionId } = req.params;
        const typeOfTransmission = await TypeOfTransmission.getSingle(typeOfTransmissionId);
         
         if (!typeOfTransmission) {
            return res.status(404).json({ message: 'Type of transmission not found' });
        } 

        res.status(200).json(typeOfTransmission);
    } catch (e) {
        console.error('Error retrieving from database =>', e);
        res.status(400).json(CODE_6)
        //res.status(500).json({ message: 'Internal server error' });
    }
} 
   */



exports.updateTypeOfTransmission = async function (req, res) {
    try {
        const { typeOfTransmissionId } = req.params; 
        const typeOfTransmission = await TypeOfTransmission.getSingle(typeOfTransmissionId)
        {
            const { type } = req.body; 
            await TypeOfTransmission.updateSingle(typeOfTransmissionId, type)
            delete typeOfTransmission.type

            const newTypeOfTransmission = {
                ...typeOfTransmission,
                type
            }
            res.status(200).json(newTypeOfTransmission)
        }
    } catch (e) {
        console.error('Error retrieving from database =>', e)
    }
}

exports.deleteTypeOfTransmission = async function (req, res) {
    try {
        //const {typeOfTransmissionId} = req.params; 
        //const typeOfTransmission = await TypeOfTransmission.getSingle(typeOfTransmissionId)
        /* if(!typeOfTransmission) {
            res.status(404).json(CODE_404)
        } else */ {
            await TypeOfTransmission.delete(typeOfTransmissionId)
            res.status(204).send('OK')
        }
    } catch (e) {
        console.error('Error retrieving from database =>', e)
    }
}

