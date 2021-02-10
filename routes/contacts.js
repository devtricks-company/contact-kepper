const express = require('express');
const router = express.Router();


//@route    GET  /api/contacts
//@desc     GET All contact
//@access   Private
router.get('/' , (req,res) => {
    res.send('Get All Contacts');
})

//@route    Post  /api/contacts
//@desc     Add New Contact
//@access   Private
router.post('/' , (req,res) => {
    res.send('Add New Contact');
})

//@route    PUT  /api/contacts/:id
//@desc     Update contact
//@access   Private
router.put('/:id' , (req,res) => {
    res.send('Update  A Contact');
})

//@route    DELETE  /api/contacts/:id
//@desc     DELETE contact
//@access   Private
router.delete('/:id' , (req,res) => {
    res.send('Delete A Contact');
})



module.exports = router;