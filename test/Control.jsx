import Control from '../lib/Control';
import Select from '../lib/fields/Select';
import Checkbox from '../lib/fields/Checkbox';
import RadioGroup from '../lib/fields/RadioGroup';
import CheckboxGroup from '../lib/fields/CheckboxGroup';

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

    describe('=> control__label', () => {

      it('should have the label text', () => {

        const element = render(
          <Control label="First name">
            <input/>
          </Control>
        ).element;

        expect($(element).find('.control__label').hasText('First name')).to.be.true;

      });

    });

    describe('=> control__help', () => {

      it('should not have help text when there is no help text', () => {

        const element = render(
          <Control>
            <input/>
          </Control>
        ).element;

        expect($(element).find('.control__help').length).to.be.equal(0);

      });

      it('should have the help text when passed', () => {

        const element = render(
          <Control help="Just your first name">
            <input/>
          </Control>
        ).element;

        expect($(element).find('.control__help').hasText('Just your first name')).to.be.true;

      });

    });

    describe('=> control__input', () => {

      it('should have the input', () => {

        const element = render(
          <Control>
            <input/>
          </Control>
        ).element;

        expect($(element).find('input').length).to.be.equal(1);

      });

      it('should shrink the input container for Select fields', () => {

        const element = render(
          <Control>
            <Select options={{}}/>
          </Control>
        ).element;

        expect($(element).find('.control__input').hasClass('control__input--shrink')).to.be.true;

      });

      it('should shrink the input container for RadioGroup fields', () => {

        const element = render(
          <Control>
            <RadioGroup options={{}}/>
          </Control>
        ).element;

        expect($(element).find('.control__input').hasClass('control__input--shrink')).to.be.true;

      });

      it('should shrink the input container for Checkbox fields', () => {

        const element = render(
          <Control>
            <Checkbox name="foo" value="bar" label="Bar"/>
          </Control>
        ).element;

        expect($(element).find('.control__input').hasClass('control__input--shrink')).to.be.true;

      });

    });

    describe('=> control__alert', () => {

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

      it('should have a tick icon when valid', () => {

        const element = render(
          <Control name="name" validated valid>
            <input/>
          </Control>
        ).element;

        expect($(element).find('.control__alert').hasClass('v2-icon--tick')).to.be.true;

      });

      it('should have an exclamation icon when valid', () => {

        const element = render(
          <Control name="name" validated valid={false}>
            <input/>
          </Control>
        ).element;

        expect($(element).find('.control__alert').hasClass('v2-icon--warning-inverse')).to.be.true;

      });

      it('should be positioned outside for Select fields', () => {

        const element = render(
          <Control name="name" validated>
            <Select options={{}}/>
          </Control>
        ).element;

        expect($(element).find('.control__alert').hasClass('control__alert--outside')).to.be.true;

      });

      it('should be positioned outside for RadioGroup fields', () => {

        const element = render(
          <Control name="name" validated>
            <RadioGroup options={{}}/>
          </Control>
        ).element;

        expect($(element).find('.control__alert').hasClass('control__alert--outside')).to.be.true;

      });

      it('should be positioned specially for Checkbox fields', () => {

        const element = render(
          <Control name="name" validated>
            <CheckboxGroup options={{}}/>
          </Control>
        ).element;

        expect($(element).find('.control__alert').hasClass('control__alert--checkbox')).to.be.true;

      });

    });

    describe('=> control__message', () => {

      it('should not have the error message when there is no error', () => {

        const element = render(
          <Control name="name">
            <input/>
          </Control>
        ).element;

        expect($(element).find('.control__message').length).to.be.equal(0);

      });

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

    });

  });

});
