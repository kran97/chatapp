const express = require('express');
const {check, validationResult} = require('express-validator/check');
const router = express.Router();

// router.post('/', [
//     check('firstName').not().isEmpty().withMessage('First name must not be empty'),
//     check('lastName').not().isEmpty().withMessage('Last name should not be empty'),
//     check('email').not().isEmpty().withMessage('Email should not be empty'),
//     check('password').not().isEmpty().withMessage('Password should not be empty'),
//     ],
//     function (req,res) {

//     }
// )

    const chat = require('../../controllers/userController');

    router.post('/register', chat.registerController);

    router.post('/login' , chat.loginController);

    router.post('/forgot' , chat.forgotController);

    // // Retrieve all Notes
    // app.get('/notes', notes.findAll);

    // // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', notes.findOne);

    // // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);

    // // Delete a Note with noteId
    // app.delete('/notes/:noteId', notes.delete);
module.exports = router;