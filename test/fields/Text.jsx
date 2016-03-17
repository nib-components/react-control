import Text from '../../lib/fields/Text';

describe('Text', () => {

  it('should have a class name', () => {
    const text = $(render(<Text className="foobar"/>).element);
    expect(text.hasClass('foobar')).to.be.true;
  });

});