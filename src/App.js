const express = require('express');
const path = require('path');

class App {
    constructor(db) {
        this._db = db;
        this._app = express();
        this._app.use(express.json());
        this._app.use('/', express.static(path.resolve(__dirname, '../public')));

        this._app.get('/getUserData', this.getUserName);
        this._app.post('/userMessage', this.userMessage);

    }

    getUserName = (req, res) => {
        const users = this._db.getUsers();
        res.send(users);
        console.log(users)
    }

    userMessage = (req, res) => {
        const { body } = req;

        console.log(body)

        this._db.saveNewUser(body);// our object in place of body
    }

    getApp = () => this._app;
}

module.exports = App;
