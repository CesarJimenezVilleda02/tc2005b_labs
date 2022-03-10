const express = require('express');
const fs = require('fs');

const {
    injectInformation,
    getRequests,
    postRequest,
    getRequest,
} = require('../controller/informationController');

const router = express.Router();

router.use(injectInformation);

router.route('/').get(getRequests).post(postRequest);

router.route('/:id').get(getRequest);

module.exports = router;
