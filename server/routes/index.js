const express = require("express");
const router = express.Router();

// different model routers
router.use('/items', require('./items'));

router.use('/users', require('./users'));

module.exports = router;
