const express = require('express');
const router = express.Router();


//@route    POST  /api/users
//@desc     regiser a user
//@access Public
router.post('/' , (req,res) => {
    res.send('Register User');
})


//@route    GET  /api/users
//@desc     Get All users
//@access   Private
router.get('/' , (req,res) => {
    res.send('Get All Users');
})


module.exports = router;