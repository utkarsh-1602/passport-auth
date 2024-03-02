const express = require('express');
const router = express.Router();

const {HomePage} = require('../controllers/users')

router.get('/', HomePage);

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});


module.exports = router; 