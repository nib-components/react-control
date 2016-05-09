import TextArea from '../../lib/fields/TextArea';

describe('TextArea', () => {

  it('should have a class name', () => {
    const text = $(render(<TextArea className="foobar"/>).element);
    expect(text.hasClass('foobar')).to.be.true;
  });

  it('should have a disabled class when the input is disabled', () => {
    const text = $(render(<TextArea disabled/>).element);
    expect(text.hasClass('textarea--disabled')).to.be.true;
  });

  it('should not have a disabled class when the input is not disabled', () => {
    const text = $(render(<TextArea/>).element);
    expect(text.hasClass('textarea--disabled')).to.be.false;
  });

});