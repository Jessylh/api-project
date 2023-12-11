require('dotenv').config()
const CarBrandsModel = require('./models/carBrands.model')
const { disconnectClient } = require('./utils/mongo.utils')


//TODO:Investigar: Middleware, Query Params, Path Params




/* 
//Ingresando un nuevo cardBrand
async function saveNewCarBrands() {
    try {
        //Inicializando la clase
        const carBrands = new CarBrandsModel(null, 'Volkswagen', 'Alemania', 1937, ['Atlas', 'Golf', 'Jetta'])

        //Una vez que tenemos inicializada la clase, la podemos ejecutar con el await para salvarla en la coleccion de la base de datos
        await carBrands.save()
        console.log('Saving car brand ==>', carBrands)
    } catch(e){
        console.error('Error insert in database', e)

     //El finally se ejecuta siempre, incluso si hay un error
    } finally {
        //Cerrando la coneccion
        await disconnectClient()
    }
}

saveNewCarBrands()
//node index.js

 */


async function getAllCardbrands() {
    try {
        //Aqui no se inicializa la clase, solo se imprimen todos
        const carbrandsList = await CarBrandsModel.getAll()
        console.log('car brands list ==>', carbrandsList)
    } catch(e){
        console.error('Error retrieving in database', e)

     //El finally se ejecuta siempre, incluso si hay un error
    } finally {

        //Cerrando la coneccion
        await disconnectClient()
    }
}
getAllCardbrands()
/* 
getAllCardbrands()
//node index.js


async function getSingleCarbrands(carbrandId) {
    try {
        
        const carBrand = await CarBrandsModel.getSingleById(carbrandId)
        console.log('Getting single car brand ==>', carBrand)
    } catch(e){
        console.error('Error retrieving in database', e)

     //El finally se ejecuta siempre, incluso si hay un error
    } finally {

        //Cerrando la coneccion
        await disconnectClient()
    }
}

getSingleCarbrands('6530783e8cfc0752b6ca42e2')
//node index.js


async function getSingleCarBybrand(brandName) {
    try {
        
        const carBrand = await CarBrandsModel.getSingleByBrand(brandName)
        console.log('Getting single car brand ==>', carBrand)
    } catch(e){
        console.error('Error retrieving in database', e)

     //El finally se ejecuta siempre, incluso si hay un error
    } finally {

        //Cerrando la coneccion
        await disconnectClient()
    }
}

getSingleCarBybrand('Mercedes Benz')
//node index.js


async function deleteCarbrands(carbrandId) {
    try {
        
        const carBrand = await CarBrandsModel.deleteCarBrandById(carbrandId)
        console.log('Delete single car brand ==>', carBrand)
    } catch(e) {

        console.error('Error deleting', e)
     //El finally se ejecuta siempre, incluso si hay un error
    } finally {
        //Cerrando la coneccion
        await disconnectClient()
    }
}

deleteCarbrands('6536f926b10c34406def6f0a')




async function updateNewBrand (){
    try {
        
        const carBrand = await CarBrandsModel.updateCarBrandById('6530783e8cfc0752b6ca42e2', 'MarcaDePrueba')
        console.log('Update single car brand ==>', carBrand)
    } catch(e) {

        console.error('Error updating', e)
     //El finally se ejecuta siempre, incluso si hay un error
    } finally {
        //Cerrando la coneccion
        await disconnectClient()
    }
}
updateNewBrand ()
//node index.js

 */









