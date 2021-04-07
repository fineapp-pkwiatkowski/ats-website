import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import ImageSrc from '../../../images/automation.jpg';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { Container, Tile, Title, Content, Description, Image, ImageContainer } from './infoSection.styles';
import messages from './infoSection.messages';

export const InfoSection = () => {
  const intl = useIntl();
  const { isMobile } = useBreakpoint();

  return (
    <Container>
      <Tile>
        <Title>
          <FormattedMessage {...messages.title} />
        </Title>
        <Content>
          <Description>
            {!isMobile && (
              <ImageContainer>
                <Image src={ImageSrc} alt={intl.formatMessage(messages.imageAlt)} />
              </ImageContainer>
            )}
            <FormattedMessage {...messages.description} />
          </Description>
          {isMobile && (
            <ImageContainer>
              <Image src={ImageSrc} alt={intl.formatMessage(messages.imageAlt)} />
            </ImageContainer>
          )}
        </Content>
      </Tile>
    </Container>
  );
};
