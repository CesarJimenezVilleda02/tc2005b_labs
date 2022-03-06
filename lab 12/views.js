const express = require('express');
const fs = require('fs');

const router = express.Router();

router.use((req, res, next) => {
    req.information = JSON.parse(fs.readFileSync(`${__dirname}/data/information.json`));
    req.robofriends = JSON.parse(fs.readFileSync(`${__dirname}/data/robofriends.json`));
    next();
});

router.get('/', (req, res, next) => {
    res.render('overview.ejs', {
        robofriends: req.robofriends,
        requests: req.information,
    });
});

router.get('/preguntas', (req, res, next) => {
    res.render('preguntas.ejs');
});

module.exports = router;
