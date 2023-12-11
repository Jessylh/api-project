const express = require('express')
const router = express.Router()
const { validateIfTypeOfTransmissionExists } = require('../middleware/typeOfTransmission.middleware')


//Llamando al controlador de engineCapacity
const typeOfTransmissionController = require('../controllers/brandName/typeOfTransmission.controller')

//Definiendo las rutas
router.post('/typeOfTransmission', validateIfTypeOfTransmissionExists, typeOfTransmissionController.createTypeOfTransmission)
router.get('/typeOfTransmission', typeOfTransmissionController.getAllTypeOfTransmission)
router.get('/typeOfTransmission/:typeOfTransmissionId', typeOfTransmissionController.getSingleTypeOfTransmission)
router.put('/typeOfTransmission/:typeOfTransmissionId', typeOfTransmissionController.updateTypeOfTransmission)
router.delete('/typeOfTransmission/:typeOfTransmissionId', typeOfTransmissionController.deleteTypeOfTransmission)

//Exportando el router
module.exports = router; 