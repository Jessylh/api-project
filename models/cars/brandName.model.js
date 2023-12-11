const { database } = require('../../utils/mongo.utils')
const { ObjectId } = require('mongodb')

//Creando la clase para hacer el model de Brandname


class BrandName {
    static get collection() {
        return 'brandName'
    }

    //Usando los Js docs para documentar el codigo
    /** 
    * @param {string} brandName
    * 
    */

    constructor(_id, brandName){
    this._id =_id
    this.brandName = brandName
    
}

    async save(){
        const collection = database().collection(BrandName.collection)
        await collection.insertOne(this)
    }
    //Creando un nuevo metodo que llama al controlador de car brand y que me traiga todas las marcas de carros existentes en la base de datos
    static async getAll() {
        const collection = database().collection(BrandName.collection)
        return await collection.find({}).toArray()
    }

    static async getSingle(_id) {
        const collection = database().collection(BrandName.collection)
        return await collection.findOne({_id: new ObjectId(_id)})
    }

    static async updateSingle(_id, brandName) {
        const collection = database().collection(BrandName.collection)
        return await collection.updateOne(
            {
                _id: new ObjectId(_id)
            },
            {
                $set:
                    { brandName: brandName }
            }
            )
    }

    static async delete(_id) {
        const collection = database().collection(BrandName.collection)
        return await collection.deleteOne({_id: new ObjectId(_id)})
    }

}

module.exports = BrandName


