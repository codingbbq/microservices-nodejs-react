const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/events', (req, res) => {

    const { type, data} = req.body;
    console.log(posts);
    if(type === 'postCreated') {
        const { id, title } = data;
        posts[id] = {
            id, title
        };
    }

    if(type === 'commentCreated') {
        const { id, content, postId, status } = data;
        const post = posts[postId];
        post.comments = post.comments || [];
        post.comments.push({
            id,
            content,
            status
        });
    }

    if(type === 'commentUpdated') {
        const { id, content, postId, status } = data;
        const post = posts[postId];
        const comment = post.comments.find(comment => {
            return comment.id === id
        });
        comment.status = status;
        comment.content = content;
    }

    res.send({});

});

app.listen(4002, () => {
	console.log('Listening on port 4002');
});
