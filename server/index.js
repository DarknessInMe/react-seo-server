const express = require('express');
const path = require('path');
const fs = require('fs');
const { images, defaultData, testData } = require('./data');
const fetch = require('node-fetch');
const swapMetaTags = require('./utils');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(PORT, (error) => {
    if (error) return console.log('Error during app startup', error);

    console.log(`listening on ${PORT}...`);
});

const indexPath  = path.resolve(__dirname, '..', 'build', 'index.html');

app.get('/', (_, res) => {

    console.warn('default route!');

    fs.readFile(indexPath, 'utf8', async (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }

        return res.send(swapMetaTags(htmlData, defaultData));
    });
});

app.get('/test', (_, res) => {

    console.warn('test route!');

    fs.readFile(indexPath, 'utf8', async (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }

        return res.send(swapMetaTags(htmlData, testData));
    });
});

app.get('/post/:id', (req, res) => {

    console.warn('dynamic route!');

    fs.readFile(indexPath, 'utf8', async (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }

        const postId = req.params.id;

        if (!postId) return res.send(swapMetaTags(htmlData, defaultData));

        const imageIndex = images[postId - 1] ? postId - 1 : Math.floor(Math.random() * images.length - 1);
        const image = images[imageIndex];
        const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
        
        return res.send(swapMetaTags(htmlData, {
            title: `Post ${postId}`,
            body: post.body,
            image: image,
        }));
    });
});

app.get('*', (_, res) => {

    console.warn('default route!');

    fs.readFile(indexPath, 'utf8', async (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }

        return res.send(swapMetaTags(htmlData, defaultData));
    });
});