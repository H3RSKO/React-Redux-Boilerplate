const router = require('express').Router();

router.use('/placeholder', require('./placeholder')); // matches all requests to /api/placeholder/

module.exports = router;
