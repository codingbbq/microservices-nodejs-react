const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(cors());
const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    posts[id] = {
        id, title
    };
    await axios.post('http://localhost:4005/events', {
        type: 'postCreated',
        data: {
            id, title
        }
    });
    res.status(201).send(posts[id]);
});


app.post('/events', (req, res) => {
    console.log('Received Event', req.body.type);

    res.send({});
});


app.listen(4000, () => {
    console.log('Posts service is running on port 4000');
});