const express = require('express');
const fs = require('fs');

const {
    injectRobofriends,
    getRobofriends,
    postRobofriend,
    getRobofriend,
} = require('../controller/robofriendsController');

const router = express.Router();

router.use(injectRobofriends);

router.route('/').get(getRobofriends).post(postRobofriend);

router.route('/:id').get(getRobofriend);

module.exports = router;
