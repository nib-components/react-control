import Checkbox from '../../lib/fields/Checkbox';

describe('Checkbox', () => {

  it('should have label text', () => {
    const checkbox = $(render(<Checkbox name="gender" label="Male"/>).element);
    expect(checkbox.hasText('Male')).to.be.true;
  });

  it('should not appear selected when the value is not checked', () => {
    const checkbox = $(render(<Checkbox name="gender" label="Male"/>).element);
    expect(checkbox.find('.checkbox--selected').length).to.be.equal(0);
  });

  it('should appear selected when the value is checked', () => {
    const checkbox = $(render(<Checkbox name="gender" label="Male" checked/>).element);
    expect(checkbox.find('.checkbox--selected').length).to.be.equal(1);
  });

});