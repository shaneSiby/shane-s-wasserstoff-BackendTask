const express = require('express');
const app = express();

//! import the middleware 
const fifoMiddleware = require('./fifoServer');
const priorityMiddleware = require('./priorityServer');
const roundRobinMiddleware = require('./roundRobinServer');

//! define routes and middlewares
app.get('/fifo', fifoMiddleware);
app.get('/priority', priorityMiddleware);
app.get('/roundrobin', roundRobinMiddleware);

// Root route handler
app.get('/', (req, res) => {
    res.send('Welcome to Queue Management Example');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


