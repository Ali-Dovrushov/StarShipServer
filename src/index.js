const App = require('./App');
const Server = require('./Server');

function init() {
    const port = 5050 || process.env.PORT;

    const app = new App(db);
    const server = new Server(port, app)

    server.start();
}

init();
