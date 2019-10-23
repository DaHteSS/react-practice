import React from 'react';
import './App.css';
import Header from './modules/Header/Header.jsx';
import Navigation from './modules/Navigation/Navigation.jsx';
import Profile from './modules/Profile/Profile.jsx';
import Dialogs from './modules/Dialogs/Dialogs.jsx';
import News from './modules/News/News.jsx';
import Music from './modules/Music/Music.jsx';
import Settings from './modules/Settings/Settings.jsx';
import { BrowserRouter, Route } from 'react-router-dom';


const App = () => (
  <BrowserRouter>
    <div className="app__wrapper">
      <Header />
      <Navigation />
      <div className="app__content">
        <Route path="/profile" component={Profile} />
        <Route path="/dialogs" component={Dialogs} />
        <Route path="/feed" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
