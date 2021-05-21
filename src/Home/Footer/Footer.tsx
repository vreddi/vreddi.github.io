import React from "react";
import styled from "styled-components";
import { Legal } from "./Legal/Legal";
import { Props } from "./Footer.types";
import { Section } from "./Section/Section";

const Container = styled.div`
  background: #f5f5f7;
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Content = styled.div`
  padding: 1em;
`;
const SectionContainer = styled.div``;

export class Footer extends React.Component<Props> {
  public getSections(): JSX.Element {
    return (
      <SectionContainer>
        {this.props.sections?.map(s => (
          <Section
            title={s.title}
            listItems={s.listItems}
          />
        ))}
      </SectionContainer>
    );
  }

  public getLegal(): JSX.Element {
    return (
      <Legal
          copyright={this.props.legal?.copyright as string}
          location={this.props.legal?.location as string}
        />
    );
  }

  public render(): React.ReactNode {
    return (
      <Container>
        <Content>
          {this.props.sections && this.getSections()}
          {this.props.legal && this.getLegal()}
        </Content>
      </Container>
    );
  }
}