import React from "react";
import styled from "styled-components";

import Profile from "../../Assets/Profile.png";

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  flex: 1;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
  padding: 1rem;
`;

const Link = styled.div``;

const Avatar = styled.div`
  background-image: url(${Profile});
  width: 10rem;
  height: 10rem;
  background-size: cover;
  border-radius: 50%;
  background-position-x: -1.5rem;
`;

const Author = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h3`
  margin-top: 0.1rem;
  margin-bottom: 0rem;
`;

const Description = styled.p`
  margin-top: 0.2rem;
  margin-bottom: 0rem;
`;



export const Dashboard = () => (
  <StyledDashboard>
    <Author>
      <Avatar />
      <Name>Vishrut Reddi</Name>
      <Description>Software Engineer, Musician and Real Estate Investor</Description>
    </Author>
    <Link>
      <img src="" alt="" />
      <h2>Home</h2>
    </Link>
    <Link>
      <img src="" alt="" />
      <h2>Real Estate</h2>
    </Link>
    <Link>
      <img src="" alt="" />
      <h2>Music</h2>
    </Link>
    <Link>
      <img src="" alt="" />
      <h2>Articles</h2>
    </Link>
  </StyledDashboard>
);
