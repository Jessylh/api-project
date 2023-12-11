const { database } = require('../../utils/mongo.utils')
const { ObjectId } = require('mongodb')

class EngineCapacity {
    static get collection() {
        return 'engineCapacity'
    }

    //Usando los Js docs para documentar el codigo
    /** 
    * @param {string} engineCapacity
    */

    constructor(_id, engineCapacity) {
        this._id = _id
        this.engineCapacity = engineCapacity
    }

    async save() {
        const collection = database().collection(EngineCapacity.collection)
        await collection.insertOne(this)
    }

    static async getAll() {
        const collection = database().collection(EngineCapacity.collection)
        return await collection.find({}).toArray()
    }

    static async getSingle(_id) {
        const collection = database().collection(EngineCapacity.collection)
        return await collection.findOne({_id: new ObjectId(_id)})
    }

    static async updateSingle(_id, name) {
        const collection = database().collection(EngineCapacity.collection)
        return await collection.updateOne(
            {
                _id: new ObjectId(_id)
            },
            {
                $set:
                    { name: name }
            }
            )
    }

    static async delete(_id) {
        const collection = database().collection(EngineCapacity.collection)
        return await collection.deleteOne({_id: new ObjectId(_id)})
    }


}

module.exports = EngineCapacity


