const express = require('express');
const router = express.Router();

    const chat = require('../../controllers/userController');

    // Create a new Note
    router.post('/register', chat.registerController);

    // // Retrieve all Notes
    // app.get('/notes', notes.findAll);

    // // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', notes.findOne);

    // // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);

    // // Delete a Note with noteId
    // app.delete('/notes/:noteId', notes.delete);
module.exports = router;