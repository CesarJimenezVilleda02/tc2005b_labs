const express = require('express');
const fs = require('fs');

const { injectInformation, getOverview } = require('../controller/viewsController');

const router = express.Router();

router.use(injectInformation);

router.get('/', getOverview);

module.exports = router;
