require('dotenv').config()

const { ObjectId } = require('mongodb')
const { disconnectClient } = require('./utils/mongo.utils')

const BrandNameController = require('../Jessy_mongodb_1 copy/controllers/brandName/car.controller')

const EngineCapacityController = require('../Jessy_mongodb_1 copy/controllers/brandName/car.controller')

const FuelTypeController = require('../Jessy_mongodb_1 copy/controllers/brandName/car.controller')

const TypeOfTransmissionController = require('../Jessy_mongodb_1 copy/controllers/brandName/car.controller')

const YearCreatedController = require ('../Jessy_mongodb_1 copy/controllers/brandName/car.controller')

const CharacteristicsOfACarController = require ('../Jessy_mongodb_1 copy/controllers/brandName/car.controller')


//Llamando a toda la lista de los brandnames
BrandNameController.getAllBrandName()
//node indexCars.js


/*
//Creating CharacteristicsOfACar by id's

CharacteristicsOfACarController.updateCharacteristicsOfACar('6539e8c7b529d870f43969b3', '65399c3a3a8dd0f39d3a00db','6539a0693a8dd0f39d3a0152', '65399d8d3a8dd0f39d3a0110','65399de43a8dd0f39d3a0115', '65399d403a8dd0f39d3a0105')



//Creating year

YearCreatedController.createYear(null, 'sd')




//Creating typeOfTransmission

TypeOfTransmissionController.createTypeOfTransmission(null, 'ejemplo')


//Creating FuelType

FuelTypeController.createFuelType(null, 'electric')


//Creating engineCapacity
EngineCapacityController.createEngineCapacity(null, '1500cc')


//Creating BrandName
BrandNameController.createBrandName(null,'Marca de carro',['Array 1','Array 2','Array 3',])
 */


//node indexCars.js

//   Volvemos el lunes 20 noviembre





