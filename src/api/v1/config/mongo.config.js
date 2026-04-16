

import mongoose from "mongoose";


// Función asíncrona para conectar a la base de datos MongoDB
export async function connectMongo() {
    try {
        const mongo_uri = process.env.MONGO_URI;
        console.log('mongo_uri', mongo_uri)
        // Se intenta conectar usando Mongoose con opciones recomendadas
        await mongoose.connect(mongo_uri, {
            serverSelectionTimeoutMS: 10000,
            dbName: 'clase07',
        });

        // Si la conexión es exitosa, imprime mensaje en consola
        console.log("Conectado a MongoDB correctamente");
    } catch (err) {
        // Si hay error al conectar, imprime el error en consola
        console.error("Error al conectar a MongoDB:", err.message);

        // Termina la ejecución de la aplicación ya que no puede continuar sin DB
        process.exit(1);
    }
}













// const { MongoClient, ServerApiVersion } = require('mongodb');

// const mongoURI = process.env.MONGO_URI;


// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(mongoURI, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);
