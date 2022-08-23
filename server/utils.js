const swapMetaTags = (html, data) => 
    html.replace(
        '<title>React App</title>',
        `<title>${data.title}</title>`
    )
    .replace('__META_OG_TITLE__', data.title)
    .replace('__META_OG_DESCRIPTION__', data.body)
    .replace('__META_DESCRIPTION__', data.body)
    .replace('__META_OG_IMAGE__', data.image)
    .replace('__META_SECURE_OG_IMAGE__', data.image);

module.exports = swapMetaTags;