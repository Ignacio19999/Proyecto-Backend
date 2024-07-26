require('dotenv').config();
const mongoose = require('mongoose');


const dbURI = process.env.MONGODB_URI;

if (!dbURI) {
    console.error('Error: La URI de MongoDB no está definida. Asegúrate de que MONGODB_URI esté establecida en el archivo .env.');
    process.exit(1); 
}

mongoose.connect(dbURI)
    .then(() => {
        console.log('Base de datos conectada exitosamente');
    })
    .catch(err => {
        console.error('Error en la conexión a la base de datos:', err);
    });

module.exports = mongoose;