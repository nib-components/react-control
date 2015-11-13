# @nib-components/react-form

Components for creating `React` based forms at `nib`.

## Installation

    npm install --save @nib-components/react-form

## Usage

```javascript

import Form from '@nib-components/react-form';

<Form title="A React form">

  <Form.Control valid={true} label="What's your name" help="Please enter your first name.">
    <Form.Text/>
  </Form.Control>

</Form>
```

## Components

### Form

A form component - provides form markup and behaviour.

```
<Form></Form>
```

#### Props

- title - A title displayed to the user
- theme - A theme name - `white`, `grey` or `green` - defaults to `white`
- onSubmit - A function for doing stuff when the form is submitted

### Control

A control component - provides control markup and behaviour.

```
<Control></Control>
```

#### Props

- label - A label displayed to the user  *(required)*
- help - Extra supporting text for the field
- error - An error displayed to the user
- valid - Whether the control is valid
- validated - Whether the user has interacted and left the field

### Text

```
<Text></Text>
```

### Select

A select box.

```
<Select></Select>
```

#### Props

- options - An object of `value: "Displayed Text"` pairs *(required)*
- placeholder - Default text for select, with no value

### Radio

```
<Radio></Radio>
```

#### Props

- name - Unique name of radio *(required)*
- value - Value of radio option *(required)*
- label - Describing the option *(required)*

### RadioGroup

```
<RadioGroup></RadioGroup>
```

#### Props

- name - A unique name *(required)*
- options - An object of `value: "Displayed Text"` pairs *(required)*
- onBlur

### Divider

A horizontal rule.

```
<Divider />
```

## To do

- initial value
