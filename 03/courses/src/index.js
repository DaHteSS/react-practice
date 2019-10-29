import store from './redux/state'
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rerender = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>, document.getElementById('root'));
}

rerender(store.getState());
store.subscribe(rerender);

serviceWorker.unregister();
