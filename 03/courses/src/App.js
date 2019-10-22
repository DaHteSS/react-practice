import React from 'react';
import './App.css';
import Header from './modules/Header/Header.jsx';
import Navigation from './modules/Navigation/Navigation.jsx';
import Profile from './modules/Profile/Profile.jsx';

const App = () => {
  return (
    <div className="app__wrapper">
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
}

export default App;
