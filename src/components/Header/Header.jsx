import React from 'react';
import SocialPanel from '../SocialPanel/SocialPanel';
import SocialBadge from '../SocialBadge/SocialBadge';
import Name from '../Name/Name';

import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import './Header.css';

const Header = (props) => (
  <div className="header">
    <Name />

    <SocialPanel>
      <SocialBadge
        faIcon={faGithub}
        color="#8e9092"
        title="Github"
        size="2x"
        link="https://github.com/vreddi"
      />
      <SocialBadge
        faIcon={faInstagram}
        color="#8e9092"
        title="Instagram"
        size="2x"
        link="https://instagram.com/vishrutreddi"
      />
      <SocialBadge
        faIcon={faTwitter}
        color="#8e9092"
        title="Twitter"
        size="2x"
        link="https://twitter.com/vishrutreddi"
      />
    </SocialPanel>
  </div>
);

export default Header;
