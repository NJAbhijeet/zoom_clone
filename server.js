const express = require('express');
const app = express();
const server = require('http').Server(app);
const { v4: uuidv4 } = require('uuid');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve the root URL
app.get('/', (req, res) => {
    res.redirect(`/${uuidv4()}`);
});

// Render the room view
app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room });
});

server.listen(3030, () => {
    console.log('Server is running on http://localhost:3030');
});
