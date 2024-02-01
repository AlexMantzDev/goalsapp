const os = require("os");

const PORT = 8080;
const SERVER = `server is listening on http://${os.hostname}:${PORT}`;

module.exports = { PORT, SERVER };
