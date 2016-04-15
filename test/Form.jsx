import Form from '../lib/Form';
import Control from '../lib/Control';

describe('Form', () => {

  describe('.handleSubmit()', () => {

  });

  describe('.render()', () => {

    it('should have the white theme', () => {
      const form = $(render(<Form theme="white"/>).element);
      expect(form.hasClass('form--white')).to.be.true;
    });

    it('should have the green theme', () => {
      const form = $(render(<Form theme="green"/>).element);
      expect(form.hasClass('form--elizabeth')).to.be.true;
    });

    it('should have the grey theme', () => {
      const form = $(render(<Form theme="grey"/>).element);
      expect(form.hasClass('form--grey')).to.be.true;
    });

    it('should not have a title when I do not pass a title', () => {
      const form = $(render(<Form/>).element);
      expect(form.find('.form__title').length).to.be.equal(0);
    });

    it('should have a title when I pass a title', () => {
      const form = $(render(<Form title="My form"/>).element);
      expect(form.find('.form__title').hasText('My form')).to.be.true;
    });

    it('should not wrap non-Control components', () => {
      const form = $(render(<Form><button>Hi</button></Form>).element);
      expect(form.find('button').hasText('Hi')).to.be.true;
    });

    it('should wrap Control components', () => {
      const form = $(render(<Form><Control><input/></Control></Form>).element);
      expect(form.find('.form__control').find(Control).length).to.be.equal(1);
    });

  });

});
