const BrandName = require('../../models/cars/brandName.model')
const { CODE_3, CODE_404} = require('../../constants/Error_CODE')

//brandName

//Creando los controladores

exports.createBrandName = async function (req, res) {
    try {
        const { brand } = req.body;
        if (!brand) {
            res.status(400).json(CODE_3)
        } else {
            const brandName = new BrandName(null, brand)
            await brandName.save()
            res.status(200).json(brandName)
        }
    } catch (e) {
        console.error('Error inserting in database =>', e)
    }
}


/* 
//Metiendo el brandmodel 
exports.createBrandName = async function (req, res) {
    try {
        const { brand, brandModel } = req.body

        if (!(brand && brandModel)) {
            res.status(400).json(CODE_3)
            return;       
        } else {
            const brandName = new BrandName(null, brand, brandModel)
            await brandName.save()
            res.status(200).json(brandName)
        }
    } catch (e) {
        console.error('Error inserting in database =>', e)
    }
}
 */

//Obteniendo todos los Brandnames
exports.getAllBrandName = async function (req, res) {
    try {
        const brandNames = await BrandName.getAll()
        res.status(200).json(brandNames)
    } catch (e) {
        console.error('Error retrieving from database =>', e)
    }
}

exports.getSingleBrandName = async function (req, res) {
    try {
        const {brandNameId} = req.params; 
        const brandName = await BrandName.getSingle(brandNameId)
        if(!brandName) {
            res.status(400).json(CODE_3)
        } else {
            res.status(200).json(brandName)
        }
    } catch (e) {
        console.error('Error retrieving from database =>', e)
    }
}


exports.updateBrandName = async function (req, res) {
    try {
        const {brandNameId} = req.params; 
        const name = await BrandName.getSingle(brandNameId)
        if(!name) {
            res.status(400).json(CODE_3)
        } else {
            const {brand} = req.body; 
            await BrandName.updateSingle(brandNameId, brand)
            delete name.brand
            const newBrandName = {
                ...name,
                brand
            }
            res.status(200).json(newBrandName)
        }
    } catch (e) {
        console.error('Error retrieving from database =>', e)
    }
}

exports.deleteBrandName = async function (req, res) {
    try {
        const {brandNameId} = req.params; 
        const brandName = await BrandName.getSingle(brandNameId)
        if(!brandName) {
            res.status(404).json(CODE_404)
        } else {
            await BrandName.delete(brandNameId)
            res.status(204).send('OK')
        }
    } catch (e) {
        console.error('Error retrieving from database =>', e)
    }
}

