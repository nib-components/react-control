import Button from '../lib/Button';
import $ from 'react-testutils-query';
import render from 'react-testutils-render';

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
      const rendered = render(<Button label='test button' />);
      expect($('i', rendered.element).props.className).to.equal('v2-icon v2-icon--smallest v2-icon--chevron-circle-inverse v2-icon--offset-descenders');
    });

    it('should have a heart glyph when it is specified', () => {
      const rendered = render(<Button label='test button' glyph="heart" />);
      expect($('i', rendered.element).props.className).to.equal('v2-icon v2-icon--smallest v2-icon--heart v2-icon--offset-descenders');
    });

  });

});