import React from 'react';
import ReactDOM from 'react-dom';
import * as nib from '..';

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
    <div className="form form--white">

        <nib.Control valid={true} label="What's your name" help="We just need your first name.">
          <nib.TextInput/>
        </nib.Control>

        <hr className="form__divider" />

        <nib.Control valid={false} label="Are you man or boy?" message="You are not!">
          <nib.TextInput/>
        </nib.Control>

        <nib.Control valid={true} label="Are you man or boy?">
          <nib.RadioGroup name="stature" options={{man: 'Man', boy: 'Boy'}}/>
        </nib.Control>

        <nib.Control valid={false} label="In what state is your man-palace?">
          <nib.SelectInput options={states} placeholder="Where do you live?"/>
        </nib.Control>

    </div>

    <div className="form form--elizabeth">

      <nib.Control valid={false} label="What's your name" help="We just need your first name." message="Just your name!">
        <nib.TextInput/>
      </nib.Control>

      <hr className="form__divider" />

      <nib.Control valid={true} label="Are you man or boy?">
      <nib.TextInput/>
      </nib.Control>

      <nib.Control valid={true} label="Are you man or boy?">
        <nib.RadioGroup name="stature" options={{man: 'Man', boy: 'Boy'}}/>
      </nib.Control>

      <nib.Control valid={false} label="In what state is your man-palace?">
      <nib.SelectInput options={states} placeholder="Where do you live?"/>
      </nib.Control>

    </div>

    <div className="form form--grey">

      <nib.Control valid={false} label="What's your name" help="We just need your first name." message="Just your name!">
        <nib.TextInput/>
      </nib.Control>

      <hr className="form__divider" />

      <nib.Control valid={true} label="Are you man or boy?">
        <nib.TextInput/>
      </nib.Control>

      <nib.Control valid={true} label="Are you man or boy?">
        <nib.RadioGroup name="stature" options={{man: 'Man', boy: 'Boy'}}/>
      </nib.Control>

      <nib.Control valid={false} label="In what state is your man-palace?">
        <nib.SelectInput options={states} placeholder="Where do you live?"/>
      </nib.Control>

    </div>
  </div>,
  document.querySelector('#app')
);
