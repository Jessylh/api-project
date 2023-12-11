const { database } = require('../../utils/mongo.utils')
const { ObjectId } = require('mongodb')


//TODO: Hay que ordenarlo de menor a mayor
//TODO: Enviarle un Query param que diga si se desea ordenar mayor o menor

class Year {
    static get collection() {
        return 'year'
    }

    //Usando los Js docs para documentar el codigo
    /** 
    * @param {number} year
    */

    constructor(_id, year){
    this._id =_id
    this.year = year
}

    async save() {
    const collection = database().collection(Year.collection)
    await collection.insertOne(this)
}

    static async getAll() {
    const collection = database().collection(Year.collection)
    return await collection.find({}).toArray()
}

    static async getSingle(_id) {
    const collection = database().collection(Year.collection)
    return await collection.findOne({_id: new ObjectId(_id)})
}

static async updateSingle(_id, year) {
    const collection = database().collection(Year.collection);
    return await collection.updateOne(
        {
            _id: new ObjectId(_id)
        },
        {
            $set:
                { year: year }
        }
        )
}


static async delete(_id) {
    const collection = database().collection(Year.collection);
    return await collection.deleteOne({_id: new ObjectId(_id)})
}


}

module.exports = Year


