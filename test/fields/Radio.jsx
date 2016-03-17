import Radio from '../../lib/fields/Radio';

describe('Radio', () => {

  it('should have a class name', () => {
    const select = $(render(<Radio name="gender" label="Male" className="foobar"/>).element);
    expect(select.find('.foobar').length).to.be.at.least(1);
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

});