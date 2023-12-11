const { database } = require('../../utils/mongo.utils')
const { ObjectId } = require('mongodb')

class TypeOfTransmission {
    static get collection() {
        return 'typeOfTransmission'
    }

    //Usando los Js docs para documentar el codigo
    /** 
    * @param {string} typeOfTransmission
    */

    constructor(_id, typeOfTransmission){
    this._id =_id
    this.typeOfTransmission = typeOfTransmission
}

    async save(){
        const collection = database().collection(TypeOfTransmission.collection)
        await collection.insertOne(this)
    }

    static async getAll() {
        const collection = database().collection(TypeOfTransmission.collection)
        return await collection.find({}).toArray()
    }

    static async getSingle(_id) {
        const collection = database().collection(TypeOfTransmission.collection)
        return await collection.findOne({_id: new ObjectId(_id)})
    }

    static async updateSingle(_id, type) {
        const collection = database().collection(TypeOfTransmission.collection)
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
        const collection = database().collection(TypeOfTransmission.collection);
        return await collection.deleteOne({_id: new ObjectId(_id)})
    }

}

module.exports = TypeOfTransmission