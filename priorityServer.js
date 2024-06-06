const express = require('express');
const router = express.Router();

//! store the requests 
const priorityQueue = [];

router.use((req, res, next) => {
    const priority = req.headers.priority || 0;
    priorityQueue.push({ req, res, priority });
    processQueue();
});

//! function to process the queue 
function processQueue() {
    if (priorityQueue.length > 0) {
        priorityQueue.sort((a, b) => b.priority - a.priority);
        const { req, res } = priorityQueue.shift();
        handleRequest(req, res);
    }
}

//! function to handle request
function handleRequest(req, res) {
    res.status(200).send('Response from Priority-Based Queue Management');
}

module.exports = router;
