import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import VideoCover from './components/videoCover/VideoCover';
import ContentArea from './components/contentArea/ContentArea';
import ProfileAvatar from './components/profileAvatar/ProfileAvatar';
import ProfileAvatarContainer from './components/profileAvatarContainer/ProfileAvatarContainer';
import * as profileImg from './assets/profile.jpg';
import * as microsoftImg from './assets/microsoft.png';
import * as uiucImg from './assets/uiuc.png';
import * as mufcImg from './assets/mufc.png';
import TabContainer from './components/tabContainer/TabContainer';
import InnerContentArea from './components/innerContentArea/InnerContentArea';
import DescriptionSection from './components/descriptionSection/DescriptionSection';
import DescriptionSectionRow from './components/descriptionSectionRow/DescriptionSectionRow';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VideoCover />
        <ContentArea>
          <ProfileAvatarContainer>
            <ProfileAvatar 
              image={profileImg}
              name="Vishrut Reddi"
              tag="@vishrutreddi"
            />
          </ProfileAvatarContainer>
          <TabContainer />
          <InnerContentArea>
            <DescriptionSection>
              <DescriptionSectionRow
                title="Software Engineer II "
                themeTitle="@Microsoft"
                link="https://microsoft.com"
                image={microsoftImg}
              />
              <DescriptionSectionRow
                title="Computer Science"
                themeTitle="#UIUC"
                link="https://twitter.com/Illinois_Alma"
                image={uiucImg}
                titleEnding="Grad"
              />
              <DescriptionSectionRow
                title="Manchester United"
                themeTitle="#RedDevils"
                link="https://twitter.com/hashtag/RedDevils"
                image={mufcImg}
                titleEnding="Supporter"
              />
            </DescriptionSection>
          </InnerContentArea>
        </ContentArea>
        <Footer />
      </div>
    );
  }
}

export default App;
