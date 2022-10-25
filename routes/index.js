const express = require('express');
const {getUser,
    updateAdress,
 } = require('../controllers');

const router = express.Router();

router.get('/get/:id', getUser);