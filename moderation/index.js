const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// Watch for events

app.post('/events', async (req, res) => {
    const { type, data } = req.body;

    if (type === 'commentCreated') {
        const { id, postId, content } = data;
        const status = content.includes('orange') ? 'rejected' : 'approved';

        // Emit the moderation result
        await axios.post('http://localhost:4005/events', {
            type: 'commentModerated',
            data: {
                id,
                postId,
                status,
                content
            }
        });
    }

    res.send({});
});

app.listen(4003, () => {
    console.log('Moderation service is running on port 4003');
});
