require('dotenv').config();

const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const swaggerUi = require('swagger-ui-express');
const mongoose = require('mongoose');
const passport = require('passport');
const errorHandler = require('./src/middlewares/errorHandler');
const authMiddleware = require('./src/middlewares/authMiddleware');
const viewsRouter = require('./src/routes/views.router');
const sessionRouter = require('./src/routes/session.router');
const cartRoutes = require('./src/routes/cartRoutes');
const mockRoutes = require('./src/routes/mockRoutes');
const logger = require('./src/logger');
const loggerTestRouter = require('./src/logger/loggerTest');

// Initialize express
const app = express();
const router = express.Router();

const mongoUri = 'mongodb+srv://videogamers:videogamers17@videogamers.c17ckvu.mongodb.net/?retryWrites=true&w=majority&appName=Videogamers';

// Conectar a MongoDB
const dbConfig = require('./src/config/db');
mongoose.connect(dbConfig.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => logger.info('MongoDB connected'))
.catch(err => logger.error(err));

    app.engine('hbs', exphbs.engine({
        extname: 'hbs',
        layoutsDir: path.join(__dirname, 'views', 'layouts'), 
        defaultLayout: 'main', 
    }));
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, 'views')); 
    
    // Ruta principal
    app.get('/', (req, res) => {
        res.render('index'); 
    });

// Swager    
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'E-Commerce API',
        version: '1.0.0',
        description: 'Documentación de la API para el e-commerce de videojuegos'
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Servidor local'
        }
    ]
};

const options = {
    swaggerDefinition,
    apis: [path.join(__dirname, 'src/routes/**/*.js')], // Ruta a tus archivos de rutas
};

const swaggerSpec = swaggerJSDoc(options);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: '710497abe62fd904fec57c441f220fb0e7a28fb1',
    resave: false,
    saveUninitialized: true
}));

// Passport configuration
require('./src/config/passport-local.config');
require('./src/config/passport-github.config');
app.use(passport.initialize());
app.use(passport.session());

//Rutas
app.use('/carrito', cartRoutes);
app.use('/mock', mockRoutes);
app.use('/sesion', sessionRoutes);
app.use('/usuarios', userRoutes);
app.use('/', viewsRouter);
app.use('/loggerTest', loggerTestRoutes);

// Rutas para vistas
app.get('/', (req, res) => {
    res.render('main', { title: 'Inicio' });
});

app.get('/login', (req, res) => {
    res.render('login', { title: 'Iniciar Sesión' });
});

app.get('/productos', (req, res) => {
    res.render('products', { title: 'Productos' });
});

app.get('/perfil', (req, res) => {
    res.render('profile', { title: 'Perfil' });
});

app.get('/registro', (req, res) => {
    res.render('register', { title: 'Registro' });
});

// Error handler
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});