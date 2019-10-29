import React from 'react';
import './App.css';
import Header from './modules/Header/Header.jsx';
import Profile from './modules/Profile/Profile.jsx';
import Dialogs from './modules/Dialogs/Dialogs.jsx';
import News from './modules/News/News.jsx';
import Music from './modules/Music/Music.jsx';
import Settings from './modules/Settings/Settings.jsx';
import { Route } from 'react-router-dom';
import Sidebar from './modules/Sidebar/Sidebar.jsx';


const App = (props) => (
  <div className="app__wrapper">
    <Header />
    <Sidebar state={props.state.sidebar} />
    <div className="app__content">
      <Route
        path="/profile"
        render={() => (
          <Profile state={props.state.profilePage}
            dispatch={props.dispatch}
          />)
      }
      />
      <Route
        path="/dialogs"
        render={() => (
          <Dialogs state={props.state.dialogsPage} />)}
      />
      <Route path="/feed" render={() => <News />} />
      <Route path="/music" render={() => <Music />} />
      <Route path="/settings" render={() => <Settings />} />
    </div>
  </div>
  );
export default App;
