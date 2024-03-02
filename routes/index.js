const express = require('express');
const router = express.Router();

const {HomePage} = require('../controllers/users');
const User = require('../models/users');

router.get('/', HomePage);

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});


router.get('/user/dashboard', (req, res) => {
    const userName = req.query.userName;
    res.render('dashboard', { userName });
});

module.exports = router; 