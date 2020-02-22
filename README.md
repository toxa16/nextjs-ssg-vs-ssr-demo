# Next.js SSG vs SSR demo app

Welcome to the demo application for the Next.js SSG vs SSR article series from the [AntonCodes](https://antoncodes.com) blog!

## Getting Started

This demo application consists of two parts: the Next.js *client app* and the *backend server*.

To get started, all you need is clone this application and install dependencies:

```bash
git clone https://github.com/toxa16/nextjs-ssg-vs-ssr-demo.git
cd nextjs-ssg-vs-ssr-demo
npm install
```

## Simple Launch

To launch the demo application you will need to build and start the client app and start the backend server. To do this, execute the following commands:

```bash
npm run build # building the Next.js app
npm start
```

The `npm start` command with start the client app and backend server [concurrently](https://www.npmjs.com/package/concurrently) on localhost. By default, the client app will be hosted on port 3000 and the backend server on port 3001.

## Advanced Launch

You can start the client app and/or the backend server on different port(-s). However, in this case **the `npm start` command won't be suitable for you any more**. You will need to start the client app and backend server in different terminals.

### Starting client app on different port

To start the client app on a different port (e.g. 3002), simply run:

```bash
npx next start -p 3002
# or
npm run next:start -- -p 3002
```

### Starting backend server on different port

To start the backend server on different port (e.g. 3003), set the `PORT` environment variable:

```bash
PORT=3003 npm run backend:start
```

Since the client app will look for the backend server on `locahost:3001` by default, you will also need to set the `BACKEND_URL` environment variable while *building* the client app to tell it where the backend server is deployed:

```bash
BACKEND_URL=http://localhost:3003 npm run build
npx next start
```

Happy hacking!

## Author

© 2020 Anton Bahurinsky
