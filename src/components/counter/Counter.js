import React from 'react';
import { connect } from 'react-redux';
import Button from '../button/Button';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <div> value : {this.props.value}</div>
        <Button />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  value: state.counter.value,
});
export default connect(mapStateToProps, null)(Counter);
