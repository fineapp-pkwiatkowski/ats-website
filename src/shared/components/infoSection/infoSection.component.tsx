import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useSpring, config } from 'react-spring';

import ImageSrc from '../../../images/automation.jpg';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { Container, Tile, Title, Content, Description, Image, ImageContainer } from './infoSection.styles';
import messages from './infoSection.messages';

export const animationProps = {
  opacity: 1,
  transform: 'translateY(0)',
  from: { opacity: 0, transform: 'translateY(-25px)' },
  delay: 200,
  config: config.molasses,
};

export const InfoSection = () => {
  const intl = useIntl();
  const { isMobile } = useBreakpoint();
  const containerAnimationProps = useSpring(animationProps);
  const titleAnimationProps = useSpring({
    ...animationProps,
    from: { opacity: 0, transform: 'translateY(-20px)' },
    delay: 400,
    config: config.slow,
  });
  const contentAnimationProps = useSpring({
    ...animationProps,
    from: { opacity: 0, transform: 'translateY(-30px)' },
    delay: 500,
    config: config.slow,
  });

  return (
    <Container style={containerAnimationProps}>
      <Tile>
        <Title style={titleAnimationProps}>
          <FormattedMessage {...messages.title} />
        </Title>
        <Content style={contentAnimationProps}>
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
