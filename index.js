import Form from './lib/Form';
import Control from './lib/control/Control';
import Text from './lib/fields/Text';
import Select from './lib/fields/Select';
import Radio from './lib/fields/Radio';
import RadioGroup from './lib/fields/RadioGroup';
import Checkbox from './lib/fields/Checkbox';
import CheckboxGroup from './lib/fields/CheckboxGroup';
import Divider from './lib/Divider';

Form.Control = Control;
Form.Text = Text;
Form.Select = Select;
Form.Radio = Radio;
Form.RadioGroup = RadioGroup;
Form.Checkbox = Checkbox;
Form.CheckboxGroup = CheckboxGroup;
Form.Divider = Divider;

export default Form;