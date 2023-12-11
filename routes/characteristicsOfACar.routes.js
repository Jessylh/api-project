const express = require('express')
const router = express.Router()

//Llamando al controlador de brandName
const characteristicsOfACarController = require('../controllers/brandName/characteristicsOfACar.controller')

//Definiendo las rutas
router.post('/characteristicsOfACar', characteristicsOfACarController.createCharacteristicsOfACar)
router.get('/characteristicsOfACar', characteristicsOfACarController.getAllcharacteristicsOfACar)
router.get('/characteristicsOfACar/:characteristicsOfACarId', characteristicsOfACarController.getSingleCharacteristicsOfACar)

router.delete('/characteristicsOfACar/:characteristicsOfACarId', characteristicsOfACarController.deleteSingleCharacteristicsOfACar)

//Exportando el router
module.exports = router