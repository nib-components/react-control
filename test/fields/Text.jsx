import Text from '../../lib/fields/Text';

describe('Text', () => {

  it('should have a class name', () => {
    const text = $(render(<Text className="foobar"/>).element);
    expect(text.hasClass('foobar')).to.be.true;
  });

  it('should have a disabled class when the input is disabled', () => {
    const text = $(render(<Text disabled/>).element);
    expect(text.hasClass('textbox--disabled')).to.be.true;
  });

  it('should not have a disabled class when the input is not disabled', () => {
    const text = $(render(<Text/>).element);
    expect(text.hasClass('textbox--disabled')).to.be.false;
  });

});