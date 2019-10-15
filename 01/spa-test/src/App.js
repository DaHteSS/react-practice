import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderMenu from './modules/header.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HeaderMenu />
        <List />
        </header>
    </div>
  );
}

const List = () => {
  return (
    <ul>
      <li>Первое</li>
      <li>Второе</li>
      <li>Третье</li>
    </ul>
  );
}

export default App;
