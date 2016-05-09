import Checkbox from '../../lib/fields/Checkbox';

describe('Checkbox', () => {

  describe('.render()', () => {

    it('should have a class name', () => {
      const checkbox = $(render(<Checkbox name="gender" label="Male" className="foobar"/>).element);
      expect(checkbox.find('.foobar').length).to.be.at.least(1);
    });

    it('should have label text', () => {
      const checkbox = $(render(<Checkbox name="gender" label="Male"/>).element);
      expect(checkbox.hasText('Male')).to.be.true;
    });

    it('should have a selected class when the input is checked', () => {
      const checkbox = $(render(<Checkbox name="gender" label="Male" checked/>).element);
      expect(checkbox.find('.checkbox--selected').length).to.be.equal(1);
    });

    it('should not have a selected class when the input is not checked', () => {
      const checkbox = $(render(<Checkbox name="gender" label="Male"/>).element);
      expect(checkbox.find('.checkbox--selected').length).to.be.equal(0);
    });

    it('should have a disabled class when the input is disabled', () => {
      const checkbox = $(render(<Checkbox name="gender" label="Male" disabled/>).element);
      expect(checkbox.find('.checkbox--disabled').length).to.be.equal(1);
    });

    it('should not have a disabled class when the input is not disabled', () => {
      const checkbox = $(render(<Checkbox name="gender" label="Male"/>).element);
      expect(checkbox.find('.checkbox--disabled').length).to.be.equal(0);
    });

  });

});