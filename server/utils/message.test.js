let expect = require('expect');
let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should display the correct message object', () => {        
        let from = 'Bob';
        let text = 'Hello there';
        let message = generateMessage(from, text);
        
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate the correct location object', () => {        
        let from = 'Bob';
        let latitude = 1;
        let longitude = 1;
        let message = generateLocationMessage(from, latitude, longitude);
        let ourURL = `https://www.google.com/maps?q=${latitude},${longitude}`;
        
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from});
        expect(message).toInclude({url: ourURL});
        expect(message.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`)
    });
});            