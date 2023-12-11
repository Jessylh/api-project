const express = require('express')
const router = express.Router()

//Llamando al controlador de engineCapacity
const yearController = require('../controllers/brandName/year.controller')

//Definiendo las rutas
router.post('/year', yearController.createYear)
router.get('/year', yearController.getAllYears)
router.get('/year/:yearId', yearController.getSingleYear)
router.put('/year/:yearId', yearController.updateYear)
router.delete('/year/:yearId', yearController.deleteYear)

//Exportando el router
module.exports = router