# Deprecated!
Please use the following:

- @nib-components/form
- @nib-components/form-control
- @nib-components/textbox
- @nib-components/textarea
- @nib-components/password-textbox
- @nib-components/select
- @nib-components/checkbox
- @nib-components/checkbox-group
- @nib-components/radio
- @nib-components/radio-group
- @nib-components/divider

# @nib-components/react-form

[![Build Status](https://travis-ci.org/nib-components/react-form.svg?branch=master)](https://travis-ci.org/nib-components/react-form)

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
<Form title="Join" theme="green" onSubmit={onSubmit}></Form>
```

#### Properties

- title - A title displayed to the user
- theme - A theme name - `white`, `grey` or `green` - defaults to `white`
- onSubmit - A function for doing stuff when the form is submitted

### Control

A control component - provides control markup and behaviour.

```
<Form.Control label="First Name"></Form.Control>
```

#### Properties

- name - The name of the control
- label - A label displayed to the user  *(required)*
- help - Extra supporting text for the field
- error - An error displayed to the user
- valid - Whether the control is valid
- validated - Whether the user has interacted and left the field

### Text

```
<Form.Text></Form.Text>
```

### TextArea

```
<Form.TextArea></Form.TextArea>
```

### Select

A select box.

```
<Form.Select options={mr: 'Mr', mrs: 'Mrs'}></Form.Select>
```

#### Props

- options - Either: *(required)*
  - An object containing key-value pairs e.g.
      ```javascript
      {
        male: 'Male',
        female: 'Female'
      }
      ```
  - An array of objects containing specific keys e.g.
    ```javascript
    [
      {value: 'male', label: 'Male'},
      {value: 'female', label: 'Female'},
    ]
    ```
- placeholder - Default text for select, with no value

### Radio

See `@nib-components/radio`.

### RadioGroup

See `@nib-components/radio-group`.

### Button

See `@nib-components/button`.

### Divider

A horizontal rule.

```
<Form.Divider />
```

## Change log

### 0.17.0

- break: removed `defaultValue` prop from `RadioGroup` and `CheckboxGroup`
- moved `Radio` and `RadioGroup` implementation to `@nib-components/radio` and `@nib-components/radio-group`

### 0.16.1

- fix: forgot to import `classnames`

### 0.16.0

- add: allow custom classname to be set on `Form.Control`
- add: allow custom classname and custom props to be set on `Form.Divider`

### 0.15.0

- break: wrap `Form.Divider` components in a `<div className="form__control"/>` because the element's margin was removed in `@nib-styles/react-form@0.8.0`
- fix: update the class name used by `Form.Divider` because it was changed in `@nib-styles/react-form@0.8.0`

### 0.14.2

- fix: no longer require a `name` prop on a `Control`

### 0.14.1

- fix: ignore additional `redux-formo` props

### 0.14.0

- add: strip additional properties passed down by `redux-formo` to avoid [Unkown Prop Warning](https://facebook
.github.io/react/warnings/unknown-prop.html) emitted by `react@>=15.2`

### 0.13.0

- add: allow a custom class to be placed on radio elements
- fix: add a `label--disabled` class when the control is disabled

### 0.12.0

- add: a `*--disabled` class to each of the components when a `disabled` property is present

### 0.11.0

- add: the ability to add a custom `className` to a `Form`

## To do

- initial value
