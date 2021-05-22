import React from "react";
import styled from "styled-components";
import { Legal } from "./Legal/Legal";
import { Props } from "./Footer.types";
import { Section } from "./Section/Section";
import { MailMe } from "./MailMe/MailMe";

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
const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const UpperContent = styled.div`
  display: flex;
`;

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

  public getMail(): JSX.Element {
    return (
      <MailMe
        image={this.props.mail?.image as string}
        onEmailClick={this.props.mail?.onEmailClick}
        onResumeClick={this.props.mail?.onResumeClick}
      />
    );
  }

  public render(): React.ReactNode {
    return (
      <Container>
        <Content>
          <UpperContent>
            {this.props.sections && this.getSections()}
            {this.props.mail && this.getMail()}
          </UpperContent>
          {this.props.legal && this.getLegal()}
        </Content>
      </Container>
    );
  }
}