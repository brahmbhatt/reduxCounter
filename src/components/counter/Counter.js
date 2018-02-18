import React from 'react';
import store from '/Users/margibrahmbhatt/reduxcounter/src/store/store';
import Button from '../button/Button';

export default class Counter extends React.Component {
  render() {
    return (
      <div>
        <div> value : {store.getState().value}</div>
        <Button />
      </div>
    );
  }
}
