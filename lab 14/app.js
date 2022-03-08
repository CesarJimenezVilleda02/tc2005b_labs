const express = require('express');
const morgan = require('morgan');
const path = require('path');

// modules
const informationRequestRouter = require('./routes/informationRoutes');
const robofriendsRouter = require('./routes/robofriendsRoutes');
const viewsRouter = require('./routes/viewsRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extnded: true, limt: '10kb' }));

app.use('/', viewsRouter);
app.use('/api/information', informationRequestRouter);
app.use('/api/robofriends', robofriendsRouter);

app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: `La ruta ${req.originalUrl} no se encuentra implementada en este servidor`,
    });
});

module.exports = app;
