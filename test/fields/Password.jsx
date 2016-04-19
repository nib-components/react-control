import Password from '../../lib/fields/Password';

describe('Password', () => {

  it('should have a class name', () => {
    const password = $(render(<Password className="foobar"/>).element);
    expect(password.hasClass('foobar')).to.be.true;
  });

  it('should have a type of password', () => {
    const password = $(render(<Password className="foobar"/>).element);
    expect(password.hasProp('type', 'password')).to.be.true;
  });

});
