import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '/Users/margibrahmbhatt/reduxcounter/src/actions/action';

class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increment}>Increment!</button>
        <button onClick={this.props.decrement}>Decrement!</button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});
export default connect(null, mapDispatchToProps)(Button);
