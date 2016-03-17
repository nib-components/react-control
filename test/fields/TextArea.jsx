import TextArea from '../../lib/fields/TextArea';

describe('TextArea', () => {

  it('should have a class name', () => {
    const text = $(render(<TextArea className="foobar"/>).element);
    expect(text.hasClass('foobar')).to.be.true;
  });

});