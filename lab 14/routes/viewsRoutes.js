const express = require('express');
const fs = require('fs');

const {
    checkLogin,
    injectInformation,
    getOverview,
    getPreguntas,
    getLogin,
} = require('../controller/viewsController');

const router = express.Router();

router.get('/login', getLogin);

router.use(injectInformation);
router.get('/', checkLogin, getOverview);
router.get('/preguntas', getPreguntas);

module.exports = router;
