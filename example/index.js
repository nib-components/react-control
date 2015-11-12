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
        <Form.Text/>
      </Form.Control>

      <Form.Divider />

      <Form.Control label="Are you man or boy?" message="You are not!">
        <Form.Text/>
      </Form.Control>

      <Form.Control valid={true} label="Are you man or boy?">
        <Form.RadioGroup name="stature" options={{man: 'Man', boy: 'Boy'}}/>
      </Form.Control>

      <Form.Control label="In what state is your man-palace?">
        <Form.Select options={states} placeholder="Where do you live?"/>
      </Form.Control>

      <button className="v2-button v2-button--primary v2-button--icon-on-right" href="">
        Button <i className="v2-icon v2-icon--smallest v2-icon--chevron-circle-inverse v2-icon--offset-descenders"></i>
      </button>

    </Form>

    <Form theme="green" title="And a Green One!">

      <Form.Control label="What's your name" help="We just need your first name." message="Just your name!">
        <Form.Text/>
      </Form.Control>

      <Form.Divider />

      <Form.Control valid={true} label="Are you man or boy?">
        <Form.Text/>
      </Form.Control>

      <Form.Control valid={true} label="Are you man or boy?">
        <Form.RadioGroup name="different" options={{man: 'Man', boy: 'Boy'}}/>
      </Form.Control>

      <Form.Control label="In what state is your man-palace?" valid={true}>
        <Form.Select options={states} placeholder="Where do you live?"/>
      </Form.Control>

      <button className="v2-button v2-button--primary v2-button--icon-on-right" href="">
        Another button <i className="v2-icon v2-icon--smallest v2-icon--chevron-circle-inverse v2-icon--offset-descenders"></i>
      </button>

    </Form>

    <Form theme="grey">

      <Form.Control label="What's your name" help="We just need your first name." message="Just your name!">
        <Form.Text/>
      </Form.Control>

      <Form.Divider />

      <Form.Control valid={true} label="Are you man or boy?">
        <Form.Text/>
      </Form.Control>

      <Form.Control valid={true} label="Are you man or boy?">
        <Form.RadioGroup name="blah" options={{man: 'Man', boy: 'Boy'}}/>
      </Form.Control>

      <Form.Control label="In what state is your man-palace?" valid={true}>
        <Form.Select options={states} placeholder="Where do you live?"/>
      </Form.Control>

    </Form>
  </div>,
  document.querySelector('#app')
);
