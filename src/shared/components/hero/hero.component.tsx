import React  from 'react';

import { Container, VideoContainer, Video } from './hero.styles';


export const Hero = () => {
  return (
    <Container>
      <VideoContainer>
        <Video autoPlay loop muted>
          <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
        </Video>
      </VideoContainer>
    </Container>
  );
};
