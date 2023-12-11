//npm run start:dev
require('dotenv').config()

//Comando para inicializar express

//Inicializamos express
const express = require('express')

//Creamos una aplicacion
const app = express()

//Definiendo el numero de puerto
const port = 3000

const brandNameRoutes = require('./routes/brandName.routes')
const engineCapacityRoutes = require ('./routes/engineCapacity.routes')
const fuelTypeRoutes = require ('./routes/fuelType.routes')
const typeOfTransmissionRoutes = require  ('./routes/typeOfTransmission.routes')
const yearRoutes = require ('./routes/year.routes')
const characteristicsOfACarRoutes = require ('./routes/characteristicsOfACar.routes')

//Usando el formato json porque lo que queremos hacer es un Api restfull de json
app.use(express.json())

//Asociando las rutas
app.use(characteristicsOfACarRoutes)
app.use(brandNameRoutes)
app.use(engineCapacityRoutes)
app.use(fuelTypeRoutes)
app.use(typeOfTransmissionRoutes)
app.use(yearRoutes)


//Inicializando el server
app.listen(port)
console.log('The server has initialized on port==>', port)

//npm run start:dev

















/* 
//Parse json response
//Usando el formato json porque lo que queremos hacer es un Api restfull de json

app.use(express.json())

 */



//A la aplicacion que creamos, le decimos la ruta, el metodo, el verbo que le queremos enviar
//Los verbos son: get, post, put, delete
//Request(req) es todo lo que el usuario envia
//Response(res) es todo lo que el servidor responde

/*   Error: No se puede repetir la ruta
//Ejemplo de si le enviamos un String al servidor
app.get('/', function (req, res){
    //Aqui le estoy diciendo al servidor "Responda enviando el string Hello Manuel" 
    res.send('<h1 style="color:red">Hello guys</h1>') //Nota: Se le puede enviar archivos, json, html
})

 */



//Ejemplo de si le enviamos un JSON al servidor

/* 
app.get('/', function (req, res){
    //Aqui le estoy diciendo al servidor "Responda enviando json cars" 
    //Ejemplo de si le enviamos un JSON al servidor
    const cars ={
        brandName: 'BMW',
        brandMode: 'X6'
    }
    res.send(JSON.stringify(cars))
    //res.status(200).json(cars)
})
 */
//Aqui le estoy diciendo a la aplicacion que escuche en el puerto 3000



//Usando e instalando la dependencia nodemon (npm i nodemon) va a actualizar los cambios de manera automatica sin estar corriendo el servidor a cada rato
//Con este comando corremos el servidor de manera automatica haciendo que los cambios se actualicen de forma automatica: npm run start:dev


//Nota: He creado un script en el package json para correr este archivo
// npm run start:dev /   npm run start o npm start

//http://localhost:3000/






/* 
app.get('/api/brandName', async function(req, res){

})
 */

 //Se puede usar esta linea de codigo tambien - app.get('/api/brandName', async function(req, res){
//Usado un arrow function - Cualquiera de las dos formas sirve
/* 
 app.get('/api/brandName', async (req, res) => {
    const brandNameList = await BrandNameController.getAllBrandName()
    res.status(200).json(brandNameList)
})

app.listen(port)
console.log('The server has initialized in port =>',  port)
 */
//web http://localhost:4000/api/brandName

//npm run start:dev
