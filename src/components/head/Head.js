import React from 'react';
import './Head.css';
import Typist from 'react-typist';
import TextLoop from 'react-text-loop';

const Head = () => (
  <div className="layer0">
    <div className="right-clouds"></div>
    <div className="left-clouds"></div>
    <div className="layer1">
    </div>
    <div className="name">
      <Typist>
        <Typist.Delay ms={1700} />
        <span> Vishrut Reddi </span>
      </Typist>
      <div className="textLoop">
        <TextLoop
          speed={3500}
          children={[
              "",
              "Engineer",
              "Designer",
              "Musician",
              "Gamer"
          ]}
      />
      </div>
    </div>
  </div>
)

export default Head;
