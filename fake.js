const mongoose = require('mongoose');
const Product = require('./models/product');
require('dotenv').config();

const dbUrl = process.env.MONGO_URI;

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async () => {
    console.log('Conectado a MongoDB...');
    await Product.deleteMany();
    await Product.insertMany([
        { name: 'PlayStation 5', description: 'Última consola de Sony', price: 499.99, stock: 10 },
        { name: 'Xbox Series X', description: 'Última consola de Microsoft', price: 499.99, stock: 10 },
        { name: 'PC Gaming', description: 'PC de alta gama para juegos', price: 1299.99, stock: 5 },
        { name: 'Nintendo Switch', description: 'Consola híbrida', price: 299.99, stock: 15 }
    ]);
    console.log('Datos falsos insertados');
    mongoose.connection.close();
})
.catch(err => console.log(err));
