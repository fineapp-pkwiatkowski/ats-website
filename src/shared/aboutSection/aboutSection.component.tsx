import React, { ReactNode } from 'react';

import { Container } from './aboutSection.styles';

export interface AboutSectionProps {
  children?: ReactNode;
}

export const AboutSection = ({ children }: AboutSectionProps) => {
  return (
    <Container>
      <h1>AboutSection component</h1>
      {children}
    </Container>
  );
};
