const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', ()=> {
  it('should reject non-string values', () => {
    var str = 123;
    var flag = isRealString(str)
    expect(flag).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var str = '   ';
    var flag = isRealString(str)
    expect(flag).toBe(false);
  });

  it('should allow string with non space character', () => {
    var str = 'test';
    var flag = isRealString(str)
    expect(flag).toBe(true);
  });
});
