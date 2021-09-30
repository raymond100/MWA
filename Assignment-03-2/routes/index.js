const express = require('express');
const { computeCalculation } = require('../controllers/compute.controller');

const router = express.Router();

router.get('/:value', computeCalculation);

module.exports = router;