const express = require('express');
const morgan = require('morgan');
const path = require('path');

// modules
const informationRequestRouter = require('./information');
const robofriendsRouter = require('./robofriends');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extnded: true, limt: '10kb' }));

app.use('/api/information', informationRequestRouter);
app.use('/api/robofriends', robofriendsRouter);

app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: `La ruta ${req.originalUrl} no se encuentra implementada en este servidor`,
    });
});

module.exports = app;
