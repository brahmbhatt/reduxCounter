import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './components/counter/Counter';

// store.subscribe(() => {
//   ReactDOM.render(<Provider store={store}><Counter /></Provider>, document.getElementById('root'));
// });
ReactDOM.render(<Provider store={store()}><Counter /></Provider>, document.getElementById('root'));
