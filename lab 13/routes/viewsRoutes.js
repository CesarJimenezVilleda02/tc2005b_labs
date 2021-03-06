const express = require('express');
const fs = require('fs');

const { injectInformation, getOverview, getPreguntas } = require('../controller/viewsController');

const router = express.Router();

router.use(injectInformation);

router.get('/', getOverview);
router.get('/preguntas', getPreguntas);

module.exports = router;
