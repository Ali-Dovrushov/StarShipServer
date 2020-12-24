const express = require('express');
const path = require('path');

class App {
    constructor() {
        this._app = express();
        this._app.use(express.json());
        this._app.use('/', express.static(path.resolve(__dirname, '../public')));
    }

    getApp = () => this._app;
}

module.exports = App;
