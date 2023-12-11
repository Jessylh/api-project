const { database } = require('../../utils/mongo.utils')
const { ObjectId } = require('mongodb')

class FuelType {
    static get collection() {
        return 'fuelType'
    }

    //Usando los Js docs para documentar el codigo
    /** 
    * @param {string} type
    */

    constructor(_id, type){
    this._id =_id
    this.type = type
}

    async save(){
        const collection = database().collection(FuelType.collection)
        await collection.insertOne(this)
    }

    static async getAll() {
        const collection = database().collection(FuelType.collection)
        return await collection.find({}).toArray()
    }

    static async getSingle(_id) {
        const collection = database().collection(FuelType.collection)
        return await collection.findOne({_id: new ObjectId(_id)})
    }

    static async updateSingle(_id, type) {
        const collection = database().collection(FuelType.collection)
        return await collection.updateOne(
            {
                _id: new ObjectId(_id)
            },
            {
                $set:
                    { type: type }
            }
            )
    }

    static async delete(_id) {
        const collection = database().collection(FuelType.collection);
        return await collection.deleteOne({_id: new ObjectId(_id)})
    }


}

module.exports = FuelType
