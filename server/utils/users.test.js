const expect = require('expect');
let {Users} = require('./users');

describe('Users', () => {

    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id: '1',
                name: 'Mike',
                room: 'Node Course'
            },
            {
                id: '2',
                name: 'Jen',
                room: 'React Course'
            },
            {
                id: '3',
                name: 'Julie',
                room: 'Node Course'
            }
        ]
    });

    it('should add new user', () => {        
        let users = new Users();
        let user = {
            id: '123',
            name: 'Bob',
            room: "Fun stuff"
        }

        let resUser = users.addUser(user.id, user.name, user.room);
        expect(resUser).toEqual(user);
        expect(users.users).toEqual([user]);

    });


    it('should remove a user', () => {        
        let userId = '1';
        let user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {        
        let userId = '50';
        let user = users.removeUser(userId);
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {        
        let userId = '2';
        let user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {        
        let userId = '50';
        let user = users.getUser(userId);
        expect(user).toNotExist();
    });

    it('should return names for Node course', () => {        
        let userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return names for Node course', () => {        
        let userList = users.getUserList('React Course');
        expect(userList).toEqual(['Jen']);
    });

});
