import React from 'react';
import { useSpring, config } from 'react-spring';

import { FormattedMessage } from 'react-intl';
import VideoPoster from '../../../images/video-poster.png';
import { Container, VideoContainer, Video, Title, VideoBackground } from './hero.styles';
import messages from './hero.messages';

export const Hero = () => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-40px)' },
    delay: 100,
    config: config.slow,
  });

  return (
    <Container>
      <VideoContainer>
        <VideoBackground />
        <Video autoPlay loop muted poster={VideoPoster}>
          <source src="./hero-video.m" type="video/mp4" />
        </Video>
        <Title style={animationProps}>
          <FormattedMessage
            {...messages.title}
            values={{
              br: () => (
                <>
                  <br />
                </>
              ),
            }}
          />
        </Title>
      </VideoContainer>
    </Container>
  );
};
