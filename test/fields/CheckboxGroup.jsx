import Checkbox from '../../lib/fields/Checkbox';
import CheckboxGroup from '../../lib/fields/CheckboxGroup';

const options = {
  dogs: 'Dogs',
  cats: 'Cats'
};

describe('CheckboxGroup', () => {

  it('should have a class name', () => {
    const group = $(render(<CheckboxGroup name="pets" options={options} className="foobar"/>).element);
    expect(group.hasClass('foobar')).to.be.true;
  });

  it('should have multiple checkbox inputs', () => {
    const group = $(render(<CheckboxGroup name="pets" options={options}/>).element);
    expect(group.find(Checkbox).length).to.be.equal(2);
  });

  it('should set the same name on the checkbox inputs', () => {
    const group = $(render(<CheckboxGroup name="pets" options={options}/>).element);
    expect(group.find(Checkbox).hasProp('name', 'pets')).to.be.true;
  });

  it('should set different values on the checkbox inputs', () => {
    const group = $(render(<CheckboxGroup name="pets" options={options}/>).element);
    expect(group.find(Checkbox).first().hasProp('value', 'dogs')).to.be.true;
    expect(group.find(Checkbox).last().hasProp('value', 'cats')).to.be.true;
  });

  it('should set different labels on the checkbox inputs', () => {
    const group = $(render(<CheckboxGroup name="pets" options={options}/>).element);
    expect(group.find(Checkbox).first().hasProp('label', 'Dogs')).to.be.true;
    expect(group.find(Checkbox).last().hasProp('label', 'Cats')).to.be.true;
  });

  it('should set checked to false when the value does not contain the checkbox value', () => {
    const group = $(render(<CheckboxGroup name="pets" options={options}/>).element);
    expect(group.find(Checkbox).first().hasProp('checked', null)).to.be.true;
    expect(group.find(Checkbox).last().hasProp('checked', null)).to.be.true;
  });

  it('should set checked when the value contains the checkbox value', () => {
    const group = $(render(<CheckboxGroup name="pets" options={options} value={['dogs']}/>).element);
    expect(group.find(Checkbox).first().hasProp('checked', true)).to.be.true;
  });

  it('should not set checked when the value does not contain the checkbox value', () => {
    const group = $(render(<CheckboxGroup name="pets" options={options} value={['dogs']}/>).element);
    expect(group.find(Checkbox).last().hasProp('checked', false)).to.be.true;
  });

  it('should have a disabled class when the input is disabled', () => {
    const group = $(render(<CheckboxGroup name="pets" options={options} disabled/>).element);
    expect(group.hasClass('checkbox-group--disabled')).to.be.true;
  });

  it('should not have a disabled class when the input is not disabled', () => {
    const group = $(render(<CheckboxGroup name="pets" options={options}/>).element);
    expect(group.hasClass('checkbox-group--disabled')).to.be.false;
  });

});
