class Model {
    constructor() {
        this._users = [
            {
                userName: 'User',
                message: 'Massage',
            }
        ]

        this.logedUsers = [
            "Qatix", "matix", "debil"
        ]
    }

    getUsers = () => this._users;

    getLogedUsers = () => this.logedUsers

    saveNewUser = newUserMessage => {
        this._users.push(newUserMessage);
    }

    deleteUser = user => {
       const index = this.logedUsers.indexOf(user);
       if (index > -1) {
           this.logedUsers.splice(index, 1)
       }
       return this.logedUsers;
    }

    addUser = user => {
        if (this.logedUsers.includes(user)) {
            return this.logedUsers
        } else {
            this.logedUsers.push(user)
        }
    }
}

module.exports = Model;
