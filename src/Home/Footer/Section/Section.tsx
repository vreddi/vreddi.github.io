import React from "react";
import styled from "styled-components";

import { Props } from "./Section.types";

const Container = styled.ul`
  min-width: 100px;
  list-style: none;
`;

const Title = styled.h3`
  font-size: 12px;
  line-height: 1.33337;
  font-weight: 400;
  letter-spacing: -.01em;
  font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Apple Legacy Chevron","Helvetica Neue","Helvetica","Arial",sans-serif;
  font-weight: 600;
  margin-right: 20px;
  margin-bottom: .8em;
`;

const ListItem = styled.li`
  display: block;
  pointer-events: auto;
  margin-bottom: .8em;
`;

const Link = styled.a`
  display: flex;
  color: #515154;
  text-decoration: none;

  :hover {
    color: #1d1d1f;
  }
`;

const IconContainer = styled.div`
  margin-right: 0.2em;
`;

export class Section extends React.Component<Props> {

  public getListItems(): JSX.Element {
    return (
      <React.Fragment>
        {
          this.props.listItems.map(li => (
            <ListItem>
              <Link href={li.link} target="_blank">
                {li.icon && <IconContainer>{li.icon}</IconContainer>}
                {li.title}
              </Link>
            </ListItem>
          ))
        }
      </React.Fragment>
    );
  }
  public render(): React.ReactNode {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        {this.getListItems()}
      </Container>
    );
  }
}