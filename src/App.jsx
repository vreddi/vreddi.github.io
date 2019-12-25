import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TabContainer from './components/TabContainer/TabContainer';
import Tab from './components/Tab/Tab';
import JumboName from './components/JumboName/JumboName';
import Logo from './components/Logo/Logo';
import JumboArt from './assets/JumboArt.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <TabContainer>
            <Logo />
            <Tab title="Work" />
            <Tab title="Concepts" />
            <Tab title="Archive" />
            <Tab title="Personal" />
          </TabContainer>
        </Header>
        <div className="app-content">
          <div className="jumbo-section">
            <JumboName firstName="Vishrut" lastName="Reddi" />
            <img className="jumbo-art" src={JumboArt} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
