const App = require('./App');
const Server = require('./Server');
const Model = require('./model/Model');

function init() {
    const port = 3002 || process.env.PORT;
    const db = new Model();
    const app = new App(db);
    const server = new Server(port, app, db);

    server.start();
}

init();
