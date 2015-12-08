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

const extras = {
  generalDental: "General Dental",
  majorDental: "Major Dental",
  preventativeDental: "Preventative Dental",
  physio: "Physio",
  optical: "Optical",
  chiro: "Chiro",
  remedialMassage: "Remedial Massage",
  dietaryAdvice: "Dietary Advice",
  speechPathology: "Speech Pathology",
  occupationalTherapy: "Occupational Therapy"
};

ReactDOM.render(
  <div>

    <Form theme="white" title="A React Form">

      <Form.Control name="firstName" valid label="What's your name" help="We just need your first name.">
        <Form.Text/>
      </Form.Control>

      <Form.Divider />

      <Form.Control valid={false} validated label="Are you man or boy?" error="You are not!">
        <Form.Text/>
      </Form.Control>

      <Form.Control valid validated label="Are you man or boy?">
        <Form.RadioGroup name="stature" options={{man: 'Man', boy: 'Boy'}} onChange={event => console.log('change' ,event.target.value)} onBlur={event => console.log('blur', event.target.value)}/>
      </Form.Control>

      <Form.Control label="In what state is your man-palace?">
        <Form.Select options={states} placeholder="Where do you live?"/>
      </Form.Control>

      <Form.Control valid validated label="Can we add you to all of our mailing lists?">
        <Form.Checkbox name="privacy" value="Yes" label="Yes, send me lots of emails please." />
      </Form.Control>

      <Form.Control valid validated label="What extras do you want?">
        <Form.CheckboxGroup name="blah" options={{dental: 'Dental', physio: 'Physio', optical: "Optical", chiro: "Chiro", massage: "Massage"}}/>
      </Form.Control>

      <Form.Button text="Submit" />

    </Form>

    <Form theme="green" title="And a Green One!">

      <Form.Control valid validated label="What's your name" help="We just need your first name." error="Just your name!">
        <Form.Text/>
      </Form.Control>

      <Form.Divider />

      <Form.Control valid validated label="Are you man or boy?">
        <Form.Text/>
      </Form.Control>

      <Form.Control valid={false} validated label="Are you man or boy?" error="Liar!">
        <Form.RadioGroup name="different" defaultValue="man" value="boy" options={{man: 'Man', boy: 'Boy'}}/>
      </Form.Control>

      <Form.Control label="In what state is your man-palace?" valid validated>
        <Form.Select options={states} placeholder="Where do you live?"/>
      </Form.Control>

      <Form.Control valid validated label="Can we add you to all of our mailing lists?">
        <Form.Checkbox name="privacy" value="Yes" label="Yes, send me lots of emails please." />
      </Form.Control>

      <Form.Control valid validated label="What extras do you want?">
        <Form.CheckboxGroup name="blah" value="optical" options={extras}/>
      </Form.Control>

      <Form.Button text="Another Button" />

    </Form>

    <Form theme="grey">

      <Form.Control valid={false} validated label="What's your name" help="We just need your first name." error="Just your name!">
        <Form.Text/>
      </Form.Control>

      <Form.Divider />

      <Form.Control valid validated label="Are you man or boy?">
        <Form.Text/>
      </Form.Control>

      <Form.Control valid validated label="Are you man or boy?">
        <Form.RadioGroup name="blah" options={{man: 'Man', boy: 'Boy'}}/>
      </Form.Control>

      <Form.Control valid={false} validated label="In what state is your man-palace?" error="NSW is the best">
        <Form.Select options={states} placeholder="Where do you live?"/>
      </Form.Control>

      <Form.Control valid validated label="Can we add you to all of our mailing lists?">
        <Form.Checkbox name="privacy" value="Yes" label="Yes, send me lots of emails please." />
      </Form.Control>

      <Form.Control valid validated label="What extras do you want?">
        <Form.CheckboxGroup name="blah" defaultValue={["optical", "chiro"]} options={{dental: 'Dental', physio: 'Physio', optical: "Optical", chiro: "Chiro", massage: "Massage"}}/>
      </Form.Control>

      <Form.Control valid validated label="What extras do you want?">
        <Form.CheckboxGroup name="blah" options={extras} />
      </Form.Control>

      <Form.Button text="Submit" />

    </Form>
  </div>,
  document.querySelector('#app')
);
