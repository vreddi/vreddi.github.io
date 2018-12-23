import React, { Component } from 'react';
import Head from './components/head/Head';
import Body from './components/body/Body';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Body />
      </div>
    );
  }
}

export default App;
