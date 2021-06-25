const express = require('express');
const path = require('path');
const Queue = require('bull');

const app = express();
const priorityQueue = new Queue('limited', {
    limiter: {
        max: 5,
        duration: 1000
    }
});

const PORT = process.env.PORT || 3000;

priorityQueue.process(async (job, done) => {
    console.log(`Request number ${job.data.reqNumber} -- priority ${job.opts.priority}`);
    done();
});

app.get('/', (_req, res) => res.sendFile(path.join(__dirname + '/public/index.html')));
app.get('/call', async (req, res) => {
    priorityQueue.add({ reqNumber: req.query.key }, { priority: req.query.priority ? 1 : 0 });

    res.end();
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));