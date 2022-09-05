# Getting Started with react-seo-server

This is a try to add SEO features for project with dynamic data & routes. Inspired by [this article](https://blog.logrocket.com/adding-dynamic-meta-tags-react-app-without-ssr/)

## Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run server`

Runs the server, which swaps meta tags when someone requests the page.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Firstly, this script builds app and then runs express server, which listens routes

## Testing meta tags

1. Run `npm run server`
2. Run `ngrok` by `ngrok http 3000`
3. Open some service to check meta tags. Personally, I use [this one](https://www.opengraph.xyz/)
4. Enter ngrok link and observe

## Notes

1. Currently, for some reason, server ignores `/` route.
2. Important note, that server swaps meta tags once. It wont change meta tags if you use react routing.
