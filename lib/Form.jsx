import React from 'react';
import invariant from 'invariant';
import classNames from 'classnames';

import Control from './Control';

export default class Form extends React.Component {

  componentWillMount() {

  }

  render() {
    return (
      <div className="form form--white">

        <Control valid={true} label="What's your name" help="We just need your first name.">
          <TextInput/>
        </Control>

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
    );
  }

}