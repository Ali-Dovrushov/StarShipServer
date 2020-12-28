const express = require('express');
const path = require('path');

class App {
    constructor(db) {
        this._db = db;
        this._app = express();
        this._app.use(express.json());
        this._app.use('/', express.static(path.resolve(__dirname, '../public')));

        this._app.get('/getAllMessages', this.getAllMessages);
        this._app.post('/addMessage', this.addMessage);
        this._app.post('/LogIn', this.logIn);
        this._app.delete('/deleteUser', this.deleteUser);
    }

    getAllMessages = (req, res) => {
        const messages = this._db.getMessages();

        res.send(messages);
        res.end()
    }

    addMessage = (req, res) => {
        const { body } = req;

        this._db.addNewMessage(body);
    }

    deleteUser = (req, res) => {
        const { body } = req;

        this._db.deleteUser(body);
    }

    logIn = (req, res) => {
        const { body } = req;

        this._db.addUserToDb(body);
    }

    getApp = () => this._app;
}

module.exports = App;
