const App = require( './App' )
const Server = require( './Server' )
//const Model = require('./model/Model')

function init () {
    const port = 5050 || process.env.PORT;
    const app = new App();
    const server = new Server(port, app);

    server.start()
}

init()
