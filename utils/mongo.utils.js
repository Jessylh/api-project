const { MongoClient } = require("mongodb");
const { uri, database } = require('../config/mongo.config')

// Replace the uri string with your connection string.
let client;

function getDatabase() {
    // Try Catch => Evitar que el programa se caiga, por una razon inesperada
    try {
        if (!client) {
            client = new MongoClient(uri);
            console.log('Initializing the client')
        }
        return client.db(database);
    } catch (e) {
        console.error('There was an error getting database=>', e)
    }
}

async function disconnectClient() {
    try {
        if (client) {
            console.log('Disconnecting Client');
            await client.close();
        }
    } catch (e) {
        console.error('Error Disconnecting client=>', e)
    }

}

module.exports = {
    database: getDatabase,
    disconnectClient,
    client
}

