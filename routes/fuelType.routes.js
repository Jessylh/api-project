const express = require('express')
const router = express.Router()

//Llamando al controlador de engineCapacity
const fuelTypeController = require('../controllers/brandName/fuelType.controller')

//Definiendo las rutas
router.post('/fuelType', fuelTypeController.createFuelType)
router.get('/fuelType', fuelTypeController.getAllFuelType)
router.get('/fuelType/:fuelTypeId', fuelTypeController.getSingleFuelType)
router.put('/fuelType/:fuelTypeId', fuelTypeController.updateFuelType)
router.delete('/fuelType/:fuelTypeId', fuelTypeController.deleteFuelType)

//Exportando el router
module.exports = router