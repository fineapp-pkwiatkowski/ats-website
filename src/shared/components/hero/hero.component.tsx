import React from 'react';
import { useSpring, config } from 'react-spring';

import { FormattedMessage } from 'react-intl';
import VideoPoster from '../../../images/video-poster.png';
import { Container, VideoContainer, Video, Title, VideoBackground } from './hero.styles';
import messages from './hero.messages';

export const Hero = () => {
  const containerAnimationProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-25px)' },
    delay: 100,
    config: config.molasses,
  });

  const videoAnimationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
    config: config.molasses,
  });

  const titleAnimationProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-40px)' },
    delay: 300,
    config: config.slow,
  });

  return (
    <Container style={containerAnimationProps}>
      <VideoContainer>
        <VideoBackground />
        <Video autoPlay loop muted poster={VideoPoster} style={videoAnimationProps}>
          <source src="./hero-video.mp4" type="video/mp4" />
        </Video>
        <Title style={titleAnimationProps}>
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
