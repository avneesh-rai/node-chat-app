const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', ()=> {
  it('should generate correct message object', () => {
    var from = 'abc1';
    var text = 'How are you';
    var message = generateMessage(from, text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(message).toMatchObject({
      from,
      text
    });
    expect(message.createdAt).toBeTruthy();
    expect(typeof message.createdAt).toBe('number');
  });
});
