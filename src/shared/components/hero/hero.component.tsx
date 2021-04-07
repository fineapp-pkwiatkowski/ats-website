import React from 'react';

import { FormattedMessage } from 'react-intl';
import VideoPoster from '../../../images/video-poster.png';
import { Container, VideoContainer, Video, Title } from './hero.styles';
import messages from './hero.messages';

export const Hero = () => {
  return (
    <Container>
      <VideoContainer>
        <Video autoPlay loop muted poster={VideoPoster}>
          <source src="./hero-video.mp4" type="video/mp4" />
        </Video>
        <Title>
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
