const router = require('express').Router();

const data = {"temp": {
  "1": "test1",
  "2": "test2"
} }

// matches GET requests to /api/placeholder/
router.get('/', function (req, res, next) {
  res.json(data)
});

// matches POST requests to /api/placeholder/
router.post('/', function (req, res, next) { /* etc */});
// matches PUT requests to /api/placeholder/:puppyId
router.put('/:puppyId', function (req, res, next) { /* etc */});
// matches DELETE requests to /api/placeholder/:puppyId
router.delete('/:puppyId', function (req, res, next) { /* etc */});

module.exports = router;
