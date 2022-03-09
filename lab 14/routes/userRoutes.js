const express = require('express');
const { login, logout, get_login } = require('../controller/userController');

const router = express.Router();

router.get('/login', get_login);

router.post('/login', login);

router.get('/logout', logout);

module.exports = router;
