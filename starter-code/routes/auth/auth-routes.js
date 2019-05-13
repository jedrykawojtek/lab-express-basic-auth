// Authentication
const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

// require models
const User = require('../models/User')

// Get Register Route
router.get('/register', (req, res) => {
    res.render('register')

})
// Post Register Route
router.post('/register', (req, res) => {
  var user = {
        name: req.body.name,
        email: req.body.email
    }
 
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        user.password = hash
        User.create(user)
    });

    res.render('register');
})

// Get Login Route
router.get('/login', (req, res) => {
    if(req.signedCookies.email){
        res.redirect("profile")
    } else {
    res.render('login')
    }
})

// Post Login Route
router.post('/login', (req, res) => {
    User.findOne({email:req.body.email}, (err,user)=>
  
})
    


module.exports = router;