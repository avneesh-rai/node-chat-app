const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
      users = new Users();
      users.users = [{
        id: '1',
        name: 'user1',
        room: 'Node course'
      },{
        id: '2',
        name: 'user2',
        room: 'React course'
      },{
        id: '3',
        name: 'user3',
        room: 'Node course'
      }];
  });

  it('should return user object', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Avneesh',
      room: 'The office fans'
    };

    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]); //To equal is used for arrays and object
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });


  it('should not remove user', () => {
    var userId = '11';
    var user = users.removeUser(userId);

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    var user = users.getUser('2');

    expect(user.name).toEqual('user2');
  });

  it('should not find user', () => {
    var user = users.getUser('22');

    expect(user).toEqual(undefined);
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node course');

    expect(userList).toEqual(['user1','user3']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React course');

    expect(userList).toEqual(['user2']);
  });
});
