import React from 'react';
import ReactDOM from 'react-dom';
import Form from '..';

const options = [
  {value: 'act', label: 'Australian...'}
];

const states = {
  act: 'Australian Capital Territory',
  nt: 'Northern Territory',
  nsw: 'New South Wales',
  tas: 'Tasmania',
  qld: 'Queensland',
  vic: 'Victoria',
  wa: 'Western Australia'
};

ReactDOM.render(
  <div>

    <Form theme="white" title="A React Form">

        <Form.Control valid={true} label="What's your name" help="We just need your first name.">
          <Form.TextInput/>
        </Form.Control>

        <Form.Divider />

        <Form.Control valid={false} label="Are you man or boy?" message="You are not!">
          <Form.TextInput/>
        </Form.Control>

        <Form.Control valid={true} label="Are you man or boy?">
          <Form.RadioGroup name="stature" options={{man: 'Man', boy: 'Boy'}}/>
        </Form.Control>

        <Form.Control valid={false} label="In what state is your man-palace?">
          <Form.SelectInput options={states} placeholder="Where do you live?"/>
        </Form.Control>

    </Form>

    <Form theme="elizabeth" title="And a Green One!">

      <Form.Control valid={false} label="What's your name" help="We just need your first name." message="Just your name!">
        <Form.TextInput/>
      </Form.Control>

      <Form.Divider />

      <Form.Control valid={true} label="Are you man or boy?">
      <Form.TextInput/>
      </Form.Control>

      <Form.Control valid={true} label="Are you man or boy?">
        <Form.RadioGroup name="stature" options={{man: 'Man', boy: 'Boy'}}/>
      </Form.Control>

      <Form.Control valid={false} label="In what state is your man-palace?">
      <Form.SelectInput options={states} placeholder="Where do you live?"/>
      </Form.Control>

    </Form>

    <Form theme="grey">

      <Form.Control valid={false} label="What's your name" help="We just need your first name." message="Just your name!">
        <Form.TextInput/>
      </Form.Control>

      <Form.Divider />

      <Form.Control valid={true} label="Are you man or boy?">
        <Form.TextInput/>
      </Form.Control>

      <Form.Control valid={true} label="Are you man or boy?">
        <Form.RadioGroup name="stature" options={{man: 'Man', boy: 'Boy'}}/>
      </Form.Control>

      <Form.Control valid={false} label="In what state is your man-palace?">
        <Form.SelectInput options={states} placeholder="Where do you live?"/>
      </Form.Control>

    </Form>
  </div>,
  document.querySelector('#app')
);
