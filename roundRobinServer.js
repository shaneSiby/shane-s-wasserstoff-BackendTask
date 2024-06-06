const express = require('express');
const router = express.Router();

//! store the requests 
const roundRobinQueue = [];

router.use((req, res, next) => {
    roundRobinQueue.push({ req, res });
    processQueue();
});

//! function to process the queue 
function processQueue() {
    if (roundRobinQueue.length > 0) {
        const { req, res } = roundRobinQueue.shift();
        handleRequest(req, res);
        roundRobinQueue.push({ req, res });
    }
}

//! function to handle request
function handleRequest(req, res) {
    res.status(200).send('Response from Round-Robin Queue Management');
}

module.exports = router;

