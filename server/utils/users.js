class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    //return user that removed
    var user = this.getUser(id);
    if (user) {
        this.users = this.users.filter((user) => {
          return user.id !== id;
        });
    }
    return user;
  }
  getUser (id) {
    //return user that removed
    var selectedUser = this.users.filter((user) => {
      return user.id === id;
    })[0];

    return selectedUser;
  }
  getUserList (room) {
    var users = this.users.filter((user) => {
      return user.room === room;
    });

    var namesArray = users.map((user) => {
      return user.name;
    });

    return namesArray;
  }
}

module.exports = {
  Users
}
