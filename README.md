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

- label - A label displayed to the user
- valid - Whether the control is valid
- message - A message displayed to the user

### Text

### Select

A select box.

### Radio

### RadioGroup

### Divider

A horizontal rule.

```
<Divider />
```