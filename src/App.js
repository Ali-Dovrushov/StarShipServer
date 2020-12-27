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
        this._app.delete('deleteUserName', this.deleteUserName);
        this._app.post('addUseName', this.addUserName)

    }

    getUserName = (req, res) => {
        // const users = this._db.getUsers();
        const logUs = this._db.getLogedUsers();
        // res.send(users);
        res.send(logUs);
    }

    userMessage = (req, res) => {
        const { body } = req;

        this._db.saveNewUser(body);// our object in place of body
    }

    deleteUserName = (req, res) => {
        const { body } = req;

        this._db.deleteUser(body)
    }

    addUserName = (req, res) => {
        const { body } = req;

        this._db.addUser(body)
    }

    getApp = () => this._app;
}

module.exports = App;
