const cryptoPassword = require('../cryptoPassword');

const mockPassword = '123456';
describe('cryptoPassword', () => {
  it('should return password with encryption', () => {
    expect(cryptoPassword(mockPassword)).not.toBeNull();
  });
});
