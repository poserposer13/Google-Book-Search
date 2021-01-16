const db = require('../models');
const router = require('express').Router();

router.get('/', function(req, res) {
    db.Book.find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});


router.get('/:id',  function(req, res) {
    db.Book.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});


router.post('/',  function(req, res) {
    db.Book.create({
        ...req.body
    })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.put('/:id', function(req, res) {
    db.Book.findByIdAndUpdate(req.params.id, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});


router.delete('/:id', function(req, res) {
    db.Book.findByIdAndDelete(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});


module.exports = router;
