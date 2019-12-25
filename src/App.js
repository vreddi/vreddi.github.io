import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Splash from './components/Splash/Splash';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Splash />
      </div>
    );
  }
}

export default App;
