import Control from '../lib/Control';

describe('Control', () => {

  describe('.render()', () => {

    it('should have a `control--<name>` class when I pass a name property', () => {

      const tree = render(
        <Control name="firstName">
          <input/>
        </Control>
      ).element;

      expect(query('div.control--firstName', tree)).to.be.deep.equal(tree);

    });

  });

});