import React from 'react';
import store from '/Users/margibrahmbhatt/reduxcounter/src/store/store';
import { increment, decrement } from '/Users/margibrahmbhatt/reduxcounter/src/actions/action';

export default class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => store.dispatch(increment)}>Increment!</button>
        <button onClick={() => store.dispatch(decrement)}>Decrement!</button>
      </div>
    );
  }
}
