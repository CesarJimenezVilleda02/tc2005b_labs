const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// modules
const informationRequestRouter = require('./routes/informationRoutes');
const robofriendsRouter = require('./routes/robofriendsRoutes');
const viewsRouter = require('./routes/viewsRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(
    session({
        secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste',
        resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió
        saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
    })
);
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', viewsRouter);
app.use('/api/information', informationRequestRouter);
app.use('/api/robofriends', robofriendsRouter);
app.use('/api/user', userRouter);

app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: `La ruta ${req.originalUrl} no se encuentra implementada en este servidor`,
    });
});

module.exports = app;
