import Checkbox from '../../lib/fields/Checkbox';
import CheckboxGroup from '../../lib/fields/CheckboxGroup';

const options = {
  dogs: 'Dogs',
  cats: 'Cats'
};

describe('CheckboxGroup', () => {

  it('should have a class name', () => {
    const select = $(render(<CheckboxGroup name="pets" options={options} className="foobar"/>).element);
    expect(select.hasClass('foobar')).to.be.true;
  });

  it('should have multiple checkbox inputs', () => {
    const checkbox = $(render(<CheckboxGroup name="pets" options={options}/>).element);
    expect(checkbox.find(Checkbox).length).to.be.equal(2);
  });

  it('should set the same name on the checkbox inputs', () => {
    const checkbox = $(render(<CheckboxGroup name="pets" options={options}/>).element);
    expect(checkbox.find(Checkbox).hasProp('name', 'pets')).to.be.true;
  });

  it('should set different values on the checkbox inputs', () => {
    const checkbox = $(render(<CheckboxGroup name="pets" options={options}/>).element);
    expect(checkbox.find(Checkbox).first().hasProp('value', 'dogs')).to.be.true;
    expect(checkbox.find(Checkbox).last().hasProp('value', 'cats')).to.be.true;
  });

  it('should set different labels on the checkbox inputs', () => {
    const checkbox = $(render(<CheckboxGroup name="pets" options={options}/>).element);
    expect(checkbox.find(Checkbox).first().hasProp('label', 'Dogs')).to.be.true;
    expect(checkbox.find(Checkbox).last().hasProp('label', 'Cats')).to.be.true;
  });

  it('should set checked to null when the value does not contain the checkbox value', () => {
    const checkbox = $(render(<CheckboxGroup name="pets" options={options}/>).element);
    expect(checkbox.find(Checkbox).first().hasProp('checked', null)).to.be.true;
    expect(checkbox.find(Checkbox).last().hasProp('checked', null)).to.be.true;
  });

  it('should set checked when the value contains the checkbox value', () => {
    const checkbox = $(render(<CheckboxGroup name="pets" options={options} value={['dogs']}/>).element);
    expect(checkbox.find(Checkbox).first().hasProp('checked', true)).to.be.true;
  });

  it('should not set checked when the value does not contain the checkbox value', () => {
    const checkbox = $(render(<CheckboxGroup name="pets" options={options} value={['dogs']}/>).element);
    expect(checkbox.find(Checkbox).last().hasProp('checked', false)).to.be.true;
  });

  it('should set defaultChecked when the defaultValue contains the checkbox value', () => {
    const checkbox = $(render(<CheckboxGroup name="pets" options={options} defaultValue={['dogs']}/>).element);
    expect(checkbox.find(Checkbox).first().hasProp('defaultChecked', true)).to.be.true;
  });

  it('should not set defaultChecked when the defaultValue contains the checkbox value', () => {
    const checkbox = $(render(<CheckboxGroup name="pets" options={options} defaultValue={['dogs']}/>).element);
    expect(checkbox.find(Checkbox).last().hasProp('defaultChecked', false)).to.be.true;
  });

});