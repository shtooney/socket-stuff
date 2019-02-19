let expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    
    it('should confirm that the string is not a number', () => {        
        let sampleBadString = 20;
        
        expect(isRealString(sampleBadString)).toBe(false);
    });
    
    it('should confirm that empty string is not a real string', () => {        
        let sampleBadString = '       ';
        //let sampleGoodString = '    e   ';
        
        expect(isRealString(sampleBadString)).toBe(false);
    });

    it('should confirm that a real string is indeed a real string', () => {        
        let sampleGoodString = '    e   ';
        
        expect(isRealString(sampleGoodString)).toBe(true);
    });
});