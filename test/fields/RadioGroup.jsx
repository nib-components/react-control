import Radio from '../../lib/fields/Radio';
import RadioGroup from '../../lib/fields/RadioGroup';

const options = {
  male: 'Male',
  female: 'Female'
};

describe('RadioGroup', () => {

  it('should have a class name', () => {
    const select = $(render(<RadioGroup name="gender" options={options} className="foobar"/>).element);
    expect(select.hasClass('foobar')).to.be.true;
  });

  it('should have multiple radio inputs', () => {
    const radio = $(render(<RadioGroup name="gender" options={options}/>).element);
    expect(radio.find(Radio).length).to.be.equal(2);
  });

  it('should set the same name on the radio inputs', () => {
    const radio = $(render(<RadioGroup name="gender" options={options}/>).element);
    expect(radio.find(Radio).hasProp('name', 'gender')).to.be.true;
  });

  it('should set different values on the radio inputs', () => {
    const radio = $(render(<RadioGroup name="gender" options={options}/>).element);
    expect(radio.find(Radio).first.hasProp('value', 'male')).to.be.true;
    expect(radio.find(Radio).last.hasProp('value', 'female')).to.be.true;
  });

  it('should set different labels on the radio inputs', () => {
    const radio = $(render(<RadioGroup name="gender" options={options}/>).element);
    expect(radio.find(Radio).first.hasProp('label', 'Male')).to.be.true;
    expect(radio.find(Radio).last.hasProp('label', 'Female')).to.be.true;
  });

  it('should set checked to null when the value is not set', () => {
    const radio = $(render(<RadioGroup name="gender" options={options}/>).element);
    expect(radio.find(Radio).first.hasProp('checked', null)).to.be.true;
    expect(radio.find(Radio).last.hasProp('checked', null)).to.be.true;
  });

  it('should set checked when the value is the same as the radio value', () => {
    const radio = $(render(<RadioGroup name="gender" options={options} value="male"/>).element);
    expect(radio.find(Radio).first.hasProp('checked', true)).to.be.true;
  });

  it('should not set checked when the value is not the same as the radio value', () => {
    const radio = $(render(<RadioGroup name="gender" options={options} value="male"/>).element);
    expect(radio.find(Radio).last.hasProp('checked', false)).to.be.true;
  });

  it('should set defaultChecked when the defaultValue is the same as the radio value', () => {
    const radio = $(render(<RadioGroup name="gender" options={options} defaultValue="male"/>).element);
    expect(radio.find(Radio).first.hasProp('defaultChecked', true)).to.be.true;
  });

  it('should not set defaultChecked when the defaultValue is not the same as the radio value', () => {
    const radio = $(render(<RadioGroup name="gender" options={options} defaultValue="male"/>).element);
    expect(radio.find(Radio).last.hasProp('defaultChecked', false)).to.be.true;
  });

});