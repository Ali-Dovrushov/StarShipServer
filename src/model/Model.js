class Model {
    constructor() {
        this._users = [
            {
                userName: 'User',
                message: 'Massage',
            }
        ]
    }

    getUsers = () => this._users;

    saveNewUser = newUserMessage => {
        this._users.push(newUserMessage);
    }
}

module.exports = Model;
