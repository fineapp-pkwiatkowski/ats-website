import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Element } from 'react-scroll';

import { NumberTile } from '../numberTile';
import {
  Container,
  Title,
  Content,
  Row,
  Text,
  FullText,
  LogoWrapper,
  VerticalLogo,
  NumberContainer,
  NumberTileWrapper,
} from './aboutSection.styles';
import messages from './aboutSection.messages';

export const ABOUT_SECTION_NAME = 'about';

export const AboutSection = () => {
  const intl = useIntl();

  return (
    <Element name={ABOUT_SECTION_NAME}>
      <Container>
        <Title>
          <FormattedMessage {...messages.title} />
        </Title>
        <Content>
          <Row>
            <Text>
              <LogoWrapper>
                <VerticalLogo />
              </LogoWrapper>
              <FormattedMessage {...messages.firstRow} />
            </Text>
          </Row>
          <Row>
            <FullText>
              <FormattedMessage {...messages.secondRow} />
            </FullText>
          </Row>

          <NumberContainer>
            <NumberTileWrapper>
              <NumberTile number={8} text={intl.formatMessage(messages.experienceYears)} />
            </NumberTileWrapper>
            <NumberTileWrapper>
              <NumberTile number={17} text={intl.formatMessage(messages.employers)} />
            </NumberTileWrapper>
            <NumberTileWrapper>
              <NumberTile number={200} text={intl.formatMessage(messages.capital)} />
            </NumberTileWrapper>
          </NumberContainer>
        </Content>
      </Container>
    </Element>
  );
};
