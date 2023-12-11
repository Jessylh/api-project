const express = require('express')
const router = express.Router()

//Llamando al controlador de brandName
const brandNameController = require('../controllers/brandName/brandName.controller')

//Definiendo las rutas
router.post('/brandName/', brandNameController.createBrandName)
router.get('/brandName', brandNameController.getAllBrandName)
router.get('/brandName/:brandNameId', brandNameController.getSingleBrandName)
router.put('/brandName/:brandNameId', brandNameController.updateBrandName)
router.delete('/brandName/:brandNameId', brandNameController.deleteBrandName)

//Exportando el router
module.exports = router