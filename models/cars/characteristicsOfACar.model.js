const { ObjectId } = require('mongodb')
const { database } = require('../../utils/mongo.utils')

class CharacteristicsOfACar {
    static get collection() {
        return 'characteristicsOfACar'
    }


    //TODO:Pasarlo a tipo Object Id
    //Usando los Js docs para documentar el codigo
    /** 
    * @param {string} idBradName
    * @param {string} idYear
    * @param {string} idFuelType
    * @param {string} idTypeOfTransmission
    * @param {string} idEngineCapacity
    */


    constructor(_id, brandName, year, engineCapacity, fuelType, typeOfTransmission) {
        this._id = _id
        this.brandName = brandName
        this.year = year
        this.engineCapacity = engineCapacity
        this.fuelType = fuelType
        this.typeOfTransmission = typeOfTransmission
    }

    async save() {
        const collection = database().collection(CharacteristicsOfACar.collection)
        await collection.insertOne(this)
    }

    static async getAll() {
        const collection = database().collection(CharacteristicsOfACar.collection)
        return await collection.find({}).toArray()
    }

    static async getSingleById(_id) {
        const collection = database().collection(CharacteristicsOfACar.collection);
        return await collection.findOne({ _id: new ObjectId(_id) })
    }


    static async deleteSingle(_id) {
        const collection = database().collection(CharacteristicsOfACar.collection);
        await collection.deleteOne({ _id: new ObjectId(_id) })
    }
}

module.exports = CharacteristicsOfACar
