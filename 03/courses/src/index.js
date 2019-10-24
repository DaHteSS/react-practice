import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App state={state} />, document.getElementById('root'));


// postsData={postsData} dialogsData={dialogsData} messageData={messageData} 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
