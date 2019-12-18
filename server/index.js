const server = require('./app');

// write your code here
const PORT = process.env.PORT || 8484;

server.listen(PORT, console.log(`Listening on http://localhost:${PORT}`));