import Button from '../lib/Button';

describe('Button', () => {

  describe('.constructor()', () => {

    it('should have a default glyph of chevron-circle-inverse when glyph is not specified', () => {
      const rendered = render(<Button label='test button' />);
      expect(rendered.component.props.glyph).to.be.equal('chevron-circle-inverse');
    });

    it('should have a heart glyph when the heart glyph is specified', () => {
      const rendered = render(<Button label="test button" glyph="heart" />);
      expect(rendered.component.props.glyph).to.be.equal('heart');
    });

  });

  describe('.render()', () => {

    it('should have a default glyph of chevron-circle-inverse when glyph is not specified', () => {
      const icon = $(render(<Button label='test button' />).element).find('i');
      expect(icon.hasClass(['v2-icon--chevron-circle-inverse'])).to.be.true;
    });

    it('should have a heart glyph when it is specified', () => {
      const icon = $(render(<Button label='test button' glyph="heart" />).element).find('i');
      expect(icon.hasClass(['v2-icon--heart'])).to.be.true;
    });

  });

});