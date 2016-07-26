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

```
<Form.Radio name="gender" value="female" label="Female"></Form.Radio>
```

#### Props

- name - Unique name of radio *(required)*
- value - Value of radio option *(required)*
- label - Describing the option *(required)*

### RadioGroup

```
<Form.RadioGroup name="gender" options={female: 'Female', male: 'Male'}></Form.RadioGroup>
```

#### Props

- name - A unique name *(required)*
- options - An object of `value: "Displayed Text"` pairs *(required)*

### Button

```
<Form.Button label="Submit" glyph="heart"></Form.Button>
```

#### Props

- label - Text displayed on the button *(required)*
- glyph - from v2-icons. Dfaults to `chevron-circle-inverse`

### Divider

A horizontal rule.

```
<Form.Divider />
```

## Change log

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
