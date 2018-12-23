import React from 'react';
import './Body.css';
import SocialPanel from '../socialPanel/SocialPanel';
import SocialIcon from '../socialIcon/SocialIcon';

const Body = () => 
(
  <div className="body">
    <div className="textArea">
      <h1>KOMO</h1>
      <h2>The wolf never sleeps</h2>
      <p>Vishrut Reddi is a Software Development Engineer <a className="link" href="https://twitter.com/Microsoft" rel="noopener noreferrer" target="_blank">@Microsoft</a> and a <a className="link" href="https://twitter.com/Illinois_Alma" rel="noopener noreferrer" target="_blank">@UIUC</a> graduate.</p>
      <p>Putent iisque no eos, in vim omnium diceret sensibus. Mel esse denique te, putent vivendum delicatissimi sit cu, duis mediocrem ne sea. Vel te admodum eleifend efficiendi. Mei quod voluptaria ut, illud quando perpetua ex vis. Pro ne tation salutatus, natum quidam iisque has ne.</p>
    </div>
    <div className="socialPanel-container">
      <SocialPanel>
        <SocialIcon
          iconClass="fab fa-linkedin fa-2x"
          baseColor="#c0bdbd"
          hoverColor="#0077B5"
          title="LinkedIn"
          link="https://www.linkedin.com/in/vishrutreddi/"
        />
        <SocialIcon
          iconClass="fab fa-github fa-2x"
          baseColor="#c0bdbd"
          hoverColor="#000"
          title="Github"
          link="https://github.com/vreddi"
        />
        <SocialIcon
          iconClass="fab fa-twitter fa-2x"
          baseColor="#c0bdbd"
          hoverColor="#38A1F3"
          title="Twitter"
          link="https://twitter.com/vishrutreddi"
        />
        <SocialIcon
          iconClass="fab fa-facebook fa-2x"
          baseColor="#c0bdbd"
          hoverColor="#3b5998"
          title="Facebook"
          link="https://www.facebook.com/vishrutreddi"
        />
        <SocialIcon
          iconClass="fab fa-youtube fa-2x"
          baseColor="#c0bdbd"
          hoverColor="#cc181e"
          title="YouTube"
          link="http://www.youtube.com/c/VishrutReddi"
        />
        <SocialIcon
          iconClass="fab fa-instagram fa-2x"
          baseColor="#c0bdbd"
          hoverColor="#bc2a8d"
          title="Instagram"
          link="https://www.instagram.com/vishrutreddi/"
        />
        <SocialIcon
          iconClass="fab fa-medium fa-2x"
          baseColor="#c0bdbd"
          hoverColor="#000"
          title="Medium"
          link="https://medium.com/@Jastner"
        />
        <SocialIcon
          iconClass="fab fa-discord fa-2x"
          baseColor="#c0bdbd"
          hoverColor="#738ADB"
          title="Discord"
          link=""
        />
        <SocialIcon
          iconClass="fab fa-steam fa-2x"
          baseColor="#c0bdbd"
          hoverColor="#000000"
          title="Steam"
          link="https://steamcommunity.com/id/Jastner"
        />
        <SocialIcon
          iconClass="fab fa-twitch fa-2x"
          baseColor="#c0bdbd"
          hoverColor="#6441a5"
          title="Twitch"
          link="https://www.twitch.tv/jastner"
        />
        <SocialIcon
          iconClass="fab fa-soundcloud fa-2x"
          baseColor="#c0bdbd"
          hoverColor="#ff8800"
          title="SoundCloud"
          link="https://soundcloud.com/jastner"
        />
        <SocialIcon
          iconClass="fab fa-dribbble fa-2x"
          baseColor="#c0bdbd"
          hoverColor="#00b6e3"
          title="Dribbble"
          link="https://dribbble.com/vreddi"
        />
        <SocialIcon
          iconClass="fab fa-spotify fa-2x"
          baseColor="#c0bdbd"
          hoverColor="#1db954"
          title="Spotify"
          link="https://open.spotify.com/user/12146102142?si=BLt8Se81TfiN3t1_-5Ncog"
        />
      </SocialPanel>
    </div>
  </div>
)

export default Body;