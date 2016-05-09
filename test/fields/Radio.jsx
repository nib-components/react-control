import Radio from '../../lib/fields/Radio';

describe('Radio', () => {

  it('should have a class name', () => {
    const radio = $(render(<Radio name="gender" label="Male" className="foobar"/>).element);
    expect(radio.hasClass('foobar')).to.be.true;
  });

  it('should have label text', () => {
    const radio = $(render(<Radio name="gender" label="Male"/>).element);
    expect(radio.hasText('Male')).to.be.true;
  });

  it('should not appear selected when the value is not checked', () => {
    const radio = $(render(<Radio name="gender" label="Male"/>).element);
    expect(radio.hasClass('radio--selected')).to.be.false;
  });

  it('should appear selected when the value is checked', () => {
    const radio = $(render(<Radio name="gender" label="Male" checked/>).element);
    expect(radio.hasClass('radio--selected')).to.be.true;
  });

  it('should have a class name of radio--disabled when disabled', () => {
    const radio = $(render(<Radio name="gender" label="Male" disabled/>).element);
    expect(radio.hasClass('radio--disabled')).to.be.true;
  });

  it('should not appear disabled when radio not disabled', () => {
    const radio = $(render(<Radio name="gender" label="Male"/>).element);
    expect(radio.hasClass('radio--disabled')).to.be.false;
  });

});