const { Server } = require('http');

const app = require('./app');

const server = new Server(app);
const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log('nextjs-ssg-vs-ssr backend server listening on port ' +
    server.address().port + '...');
});
