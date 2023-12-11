const express = require('express')
const router = express.Router()

//Llamando al controlador de engineCapacity
const engineCapacityController = require('../controllers/brandName/engineCapacity.controller')

//Definiendo las rutas
router.post('/engineCapacity', engineCapacityController.createEngineCapacity)
router.get('/engineCapacity', engineCapacityController.getAllEngineCapacity)
router.get('/engineCapacity/:engineCapacityId', engineCapacityController.getSingleEngineCapacity)
router.put('/engineCapacity/:engineCapacityId', engineCapacityController.updateEngineCapacity)
router.delete('/engineCapacity/:engineCapacityId', engineCapacityController.deleteEngineCapacity)

//Exportando el router
module.exports = router