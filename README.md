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

- theme - The form theme (`white`, `grey` or `green`)
- title - The form title displayed to the user
- onSubmit - The form submission handler

### Control

A control component - provides control markup and behaviour.

```
<Control></Control>
```


### Text

### Select

### Radio

### RadioGroup

### Divider