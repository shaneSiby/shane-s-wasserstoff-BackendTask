const express = require('express');
const router = express.Router();

//! store the requests 
const fifoQueue = [];

router.use((req, res, next) => {
    fifoQueue.push({ req, res });
    processQueue();
});

//! function to process the queue 
function processQueue() {
    if (fifoQueue.length > 0) {
        const { req, res } = fifoQueue.shift();
        handleRequest(req, res);
    }
}

//! function to handle request
function handleRequest(req, res) {
    res.status(200).send('Response from FIFO Queue Management');
}

module.exports = router;
