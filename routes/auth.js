const express = require('express');
const router = express.Router();


//@route    GET  /api/auth
//@desc     get a logged in user
//@access   Private
router.get('/' , (req,res) => {
    res.send('Get Logged in User');
})

//@route    POST  /api/auth
//@desc    Autenticate & get Token
//@access   Public
router.post('/' , (req,res) => {
    res.send('Authenticate User');
})



module.exports = router;