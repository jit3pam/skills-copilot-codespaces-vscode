// create web server
const express = require('express');
const app = express();
const port = 3000;

// create a comment object
const comments = {
    '1': { id: 1, username: 'alice', content: 'hello' },
    '2': { id: 2, username: 'bek', content: 'hi' },
    '3': { id: 3, username: 'chris', content: 'bye' },
}

// create a middleware
app.use((req, res, next) => {
    req.comments = comments;
    next();
});

// create a route
app.get('/comments', (req, res) => {
    res.json(req.comments);
});

// start the server
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});