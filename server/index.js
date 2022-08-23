const express = require('express');
const path = require('path');
const fs = require('fs');
const data = require('./data');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

// static resources should just be served as they are
app.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

app.listen(PORT, (error) => {
    if (error) return console.log('Error during app startup', error);

    console.log(`listening on ${PORT}...`);
});

const indexPath  = path.resolve(__dirname, '..', 'build', 'index.html');
app.get('/posts/:id', (req, res) => {
    fs.readFile(indexPath, 'utf8', async (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }

        const postId = req.params.id;
        const imageIndex = postId - 1;
        const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())

        htmlData = htmlData.replace(
            '<title>React App</title>',
            `<title>${post.title}</title>`
        )
        .replace('__META_OG_TITLE__', post.title)
        .replace('__META_OG_DESCRIPTION__', post.body)
        .replace('__META_DESCRIPTION__', post.body)
        .replace('__META_OG_IMAGE__', data[imageIndex])
        .replace('__META_SECURE_OG_IMAGE__', data[imageIndex])

        return res.send(htmlData);
    });
});