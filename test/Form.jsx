import Form from '../lib/Form';
import Control from '../lib/Control';

describe('Form', () => {

  describe('.handleSubmit()', () => {
    it('should prevent the default event by default', () => {
      const event = { preventDefault: sinon.spy() };
      const rendered = render(<Form></Form>).component;
      rendered.handleSubmit(event);
      expect(event.preventDefault).to.be.calledOnce;
    });

    it('should not prevent the default event when action provided', () => {
      const event = { preventDefault: sinon.spy() };
      const rendered = render(<Form action="someaction"></Form>).component;
      rendered.handleSubmit(event);
      expect(event.preventDefault).to.not.be.called;
    });

    it('should call onSubmit', () => {
      const event = { preventDefault: sinon.spy() };
      const onSubmit = sinon.spy();
      const rendered = render(<Form onSubmit={onSubmit}></Form>).component;
      rendered.handleSubmit(event);
      expect(onSubmit).to.be.calledOnce;
    });
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

    it('should have a custom class name when I pass a className', () => {
      const form = $(render(<Form className="form--my-account"/>).element);
      expect(form.hasClass('form--my-account')).to.be.true;
    });

    it('should not wrap non-Control components', () => {
      const form = $(render(<Form><button>Hi</button></Form>).element);
      expect(form.find('button').hasText('Hi')).to.be.true;
    });

    it('should wrap Control components', () => {
      const form = $(render(<Form><Control><input/></Control></Form>).element);
      expect(form.find('.form__control').find(Control).length).to.be.equal(1);
    });

    it('should pass through action', () => {
      const form = $(render(<Form action="someaction"></Form>).element);
      expect(form.hasProp('action', 'someaction')).to.be.true;
    });

  });

});
