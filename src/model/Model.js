class Model {
    constructor() {
        this._messages = []

        this.logedUsers = [
            "Qatix", "matix", "debil"
        ]
    }

    getMessages = () => this._messages;

    addNewMessage = newMessage => {
        this._messages.push(newMessage);
    }

    deleteUser = user => {
       const index = this.logedUsers.indexOf(user);
       if (index > -1) {
           this.logedUsers.splice(index, 1)
       }
    }

    addUserToDb = user => {
        if (!this.logedUsers.includes(user)) {
            this.logedUsers.push(user);
        }
    }
}

module.exports = Model;
