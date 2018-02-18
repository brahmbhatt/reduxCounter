import React from 'react';
import ReactDOM from 'react-dom';
import store from '/Users/margibrahmbhatt/reduxcounter/src/store/store';
import Counter from './components/counter/Counter';

store.subscribe(() => {
  ReactDOM.render(<Counter />, document.getElementById('root'));
});
ReactDOM.render(<Counter />, document.getElementById('root'));
