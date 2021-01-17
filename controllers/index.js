const router = require('express').Router();

const bookRoutes = require('./bookController');

router.use('/api/books', bookRoutes);

module.exports = router;