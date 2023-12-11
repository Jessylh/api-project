const { ObjectId } = require('mongodb')
const { database } = require('../utils/mongo.utils')

class CarBrandsModel {
    //Usando los Js docs para documentar el codigo
    /** 
    * @param {string} brand
    * @param {string} country
    * @param {number} founded
    * @param {Array} popularModels
    */


    constructor(_id, brand, country, founded, popularModels) {
        this._id = _id
        this.brand = brand
        this.country = country
        this.founded = founded
        this.popularModels = popularModels
    }

    //Podemos darle atributos de acceso que pueden ser:
    // publicos => puede ser accedidos desde cualquier archivo, siempre y cuando se inicialice la clase 
    
    // static => puede ser accedidos sin inicializar la clase; pero son relacionados directamente a la clase (Vamos a usar este)

    //Usando un metodo publico que tenemos que inicializar
    async save() {
        const collectionCarBrands = database().collection('carBrands')
        await collectionCarBrands.insertOne(this)
    }

    //En este codigo no es necesario inicializar la clase porque lo que se quiere es que me traiga todos los datos
    static async getAll() {
        const collectionCarBrands = database().collection('carBrands')
        return await collectionCarBrands.find({}).toArray()
    }

    //Obteniedo un cardBrand por Id
    static async getSingleById(_id) {
        const collectionCarBrands = database().collection('carBrands')
        return await collectionCarBrands.findOne({_id: new ObjectId(_id)})
    }

    //Obteniedo un carBrand segun la marca
    static async getSingleByBrand(brand) {
        const collectionCarBrands = database().collection('carBrands')
        return await collectionCarBrands.findOne({brand})
        //return await collectionCarBrands.findOne({brand: new ObjectId(brand)})
    }

    //Eliminado un carbrand por Id
    static async deleteCarBrandById(_id) {
        const collectionCarBrands = database().collection('carBrands')
        return await collectionCarBrands.deleteOne({ _id: new ObjectId(_id) })
    }
/* 
    //Actualizando un cardBrand - (No me funciona)
    async save() {
        const collectionCarBrands = database().collection('carBrands')
        await collectionCarBrands.insertOne(this)
    }
 */
    // Este codigo si me funciona
    static async updateCarBrandById(_id, newBrand) {
        const collectionCarBrands = database().collection('carBrands')
        
         await collectionCarBrands.updateOne(
            { _id: new ObjectId(_id) }, 
            {$set: {brand: newBrand}}) 
    }   
}







/*     //Actualizando un cardBrand
    async save() {
        const collectionCarBrands = database().collection('carBrands')
        await collectionCarBrands.updateOne({ _id: new ObjectId(_id) }, { $set: updateData })
        await collectionCarBrands.insertOne(this)
    }

//Actualizando un cardBrand
static async updateCarBrandById() {
    const collectionCarBrands = database().collection('carBrands')
    
    return await collectionCarBrands.updateOne({ _id: new ObjectId(_id) }, { $set: updateData }) */

/* 
    //Actualizando un cardBrand
    static async updateCarBrandById(_id, updateData) {
        const collectionCarBrands = database().collection('carBrands')
        
        return await collectionCarBrands.updateOne({ _id: new ObjectId(_id) }, { $set: updateData })
    }
 
}
*/

module.exports = CarBrandsModel












    //Codigo que no me funciona
/* 
    //Eliminado un carbrand por Id
    static async deleteCarBrandById(_id) {
        const collectionCarBrands = database().collection('carBrands')
        return await collectionCarBrands.findOne({_id}).deleteOne({ _id: new ObjectId(_id) })
        
    }

 */
    /* //Eliminado un carbrand por Id
    static async deleteCarBrandById(_id) {
        const collectionCarBrands = database().collection('carBrands')
        return await collectionCarBrands.findOne({_id: new ObjectId(_id)}).deleteOne({ _id: new ObjectId(_id) })
        
    } */



/* 
class ExerciseModel {
    /**
     * @param {string} name 
     * @param {string} muscle 
     * @param {number} repetitions 
     */

    /* constructor(_id, name, muscle, repetitions) {
        this._id = _id;
        this.name = name;
        this.muscle = muscle;
        this.repetitions = repetitions;
    }

    static get collection() {
        return 'exercise';
    }

    // public => puede ser accedidos desde cualquier archivo, 
    // siempre y cuando se inicialice la clase 
    // static => puede ser accedidos sin inicializar la clase; pero son relacionados
    // directamente a la clase 

    async save() {
        const collectionExercise = database().collection(ExerciseModel.collection);
        await collectionExercise.insertOne(this)
    }

    static async getAll() {
        const collectionExercise = database().collection(ExerciseModel.collection);
        return await collectionExercise.find({}).toArray();
    }

    static async getSingle(_id) {
    }

    static async update(_id, newName) {
    }

    static async deleteSingle(_id) {
    }
}

module.exports = ExerciseModel; 
 */


