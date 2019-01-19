import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import VideoCover from './components/videoCover/VideoCover';
import ContentArea from './components/contentArea/ContentArea';
import ProfileAvatar from './components/profileAvatar/ProfileAvatar';
import ProfileAvatarContainer from './components/profileAvatarContainer/ProfileAvatarContainer';
import * as profileImg from './assets/profile.jpg';
import TabContainer from './components/tabContainer/TabContainer';
import NameSection from './components/nameSection/NameSection';
import InnerContentArea from './components/innerContentArea/InnerContentArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VideoCover />
        <ContentArea>
          <ProfileAvatarContainer>
            <ProfileAvatar image={profileImg} />
          </ProfileAvatarContainer>
          <TabContainer />
          <InnerContentArea>
            <NameSection name="Vishrut Reddi" tag="@vishrutreddi" />
          </InnerContentArea>
        </ContentArea>
      </div>
    );
  }
}

export default App;
