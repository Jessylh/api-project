const Year = require('../../models/cars/year')
const {CODE_2, CODE_404} = require('../../constants/Error_CODE')


//TODO: Cambiar el "number" a year
//year
exports.createYear = async function (req, res) {
    try {
        const { number } = req.body;
        if (!number) {
            res.status(400).json(CODE_2)
        } else {
            const year = new Year(null, number)
            await year.save()
            res.status(200).json(year)
        }
    } catch (e) {
        console.error('Error inserting in database =>', e)
    }
}

exports.getAllYears = async function (req, res) {
    try {
        const years = await Year.getAll()
        res.status(200).json(years)
    } catch (e) {
        console.error('Error retrieving from database =>', e)
    }
}

exports.getSingleYear = async function (req, res) {
    try {
        const {yearId} = req.params; 
        const year = await Year.getSingle(yearId)
        if(!year) {
            res.status(400).json(CODE_2)
        } else {
            res.status(200).json(year)
        }
    } catch (e) {
        console.error('Error retrieving from database =>', e)
    }
}

exports.updateYear = async function (req, res) {
    try {
        const {yearId} = req.params; 
        const year = await Year.getSingle(yearId)
        if(!year) {
            res.status(400).json(CODE_2)
        } else {
            const {number} = req.body; 
            await Year.updateSingle(yearId, number)
            delete year.number
            const newYear = {
                ...year,
                number
            }
            res.status(200).json(newYear)
        }
    } catch (e) {
        console.error('Error retrieving from database =>', e)
    }
}

exports.deleteYear = async function (req, res) {
    try {
        const {yearId} = req.params; 
        const year = await Year.getSingle(yearId)
        if(!year) {
            res.status(404).json(CODE_404)
        } else {
            await Year.delete(yearId)
            res.status(204).send('OK')
        }
    } catch (e) {
        console.error('Error retrieving from database =>', e)
    }
}



//Carro electrico -Pablito