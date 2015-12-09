import Control from '../lib/Control';

describe('Control', () => {

  describe('.render()', () => {

    describe('=> control', () => {

      it('should have the `control--name`', () => {

        const element = render(
          <Control name="name">
            <input/>
          </Control>
        ).element;

        expect($(element).hasClass('control--name')).to.be.true;

      });
  
      it('should not have the `control--valid` class when the control is not validated', () => {
    
        const element = render(
          <Control name="name" validated={false} valid>
            <input/>
          </Control>
        ).element;
    
        expect($(element).hasClass('control--valid')).to.be.false;
    
      });
  
      it('should not have the `control--valid` class when the control is not valid', () => {
    
        const element = render(
          <Control name="name" validated valid={false}>
            <input/>
          </Control>
        ).element;
    
        expect($(element).hasClass('control--valid')).to.be.false;
    
      });
  
      it('should have the `control--valid` class when the control has been validated and is valid', () => {
    
        const element = render(
          <Control name="name" validated valid>
            <input/>
          </Control>
        ).element;
    
        expect($(element).hasClass('control--valid')).to.be.true;
    
      });
  
      it('should not have the `control--invalid` class when the control is not invalidated', () => {
    
        const element = render(
          <Control name="name" validated={false} valid>
            <input/>
          </Control>
        ).element;
    
        expect($(element).hasClass('control--invalid')).to.be.false;
    
      });
  
      it('should not have the `control--invalid` class when the control is valid', () => {
    
        const element = render(
          <Control name="name" validated valid>
            <input/>
          </Control>
        ).element;
    
        expect($(element).hasClass('control--invalid')).to.be.false;
    
      });
  
      it('should have the `control--invalid` class when the control has been invalidated and is invalid', () => {
    
        const element = render(
          <Control name="name" validated valid={false}>
            <input/>
          </Control>
        ).element;
    
        expect($(element).hasClass('control--invalid')).to.be.true;
    
      });
  
    });

    describe('=> label', () => {

      it('should have the label text', () => {

        const element = render(
          <Control label="First name">
            <input/>
          </Control>
        ).element;

        expect($(element).find('.control__label').hasText('First name')).to.be.true;

      });

    });

    //TODO: control help
    //TODO: control input
    //TODO: control/children
    //TODO: control alert variants

    describe('=> alert', () => {

      it('should not have the alert icon before the control is validated', () => {

        const element = render(
          <Control name="name">
            <input/>
          </Control>
        ).element;

        expect($(element).find('.control__alert').length).to.be.equal(0);

      });

      it('should have the alert icon after the control is validated', () => {

        const element = render(
          <Control name="name" validated>
            <input/>
          </Control>
        ).element;

        expect($(element).find('.control__alert').length).to.be.equal(1);

      });

    });

    describe('=> error', () => {

      it('should have the error message when there is an error', () => {

        const element = render(
          <Control name="name" error="Oh!">
            <input/>
          </Control>
        ).element;

        const error = (
          <div className="control__message">
            <p className="control__message-text">{error}</p>
          </div>
        );

        expect($(element).find('.control__message').hasText('Oh!')).to.be.true;

      });

      it('should not have the error message when there is not an error', () => {

        const element = render(
          <Control name="name">
            <input/>
          </Control>
        ).element;

        expect($(element).find('.control__message').length).to.be.equal(0);

      });

    });

  });

});
