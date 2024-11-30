const express = require('express');
const router = express.Router();
const maincontroller = require('../controllers/maincontroller');

/**
 * App Routes 
*/
router.get('/', maincontroller.homepage);
router.get('/about', maincontroller.about);
router.get('/contact', maincontroller.about);

module.exports = router;