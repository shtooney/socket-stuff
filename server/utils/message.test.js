let expect = require('expect');
let {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should display the correct message object', () => {        
        let from = 'Bob';
        let text = 'Hello there';
        let message = generateMessage(from, text);
        
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});