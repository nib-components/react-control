import Form from './lib/Form';
import Control from './lib/control/Control';
import Text from './lib/fields/Text';
import Select from './lib/fields/Select';
import Radio from './lib/fields/Radio';
import RadioGroup from './lib/fields/RadioGroup';
import Divider from './lib/Divider';

Form.Control = Control;
Form.Text = Text;
Form.Select = Select;
Form.Radio = Radio;
Form.RadioGroup = RadioGroup;
Form.Divider = Divider;

export default Form;