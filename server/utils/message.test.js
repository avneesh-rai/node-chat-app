const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'abc2';
    var latitude = 15;
    var longitude = 25;
    var url = 'https://www.google.com/maps?q=15,25'

    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.from).toBe(from);
    expect(message).toMatchObject({
      from,
      url
    });
    expect(typeof message.createdAt).toBe('number');
  });
});
