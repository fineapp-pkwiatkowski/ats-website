import React, { ReactNode } from 'react';

import { Container } from './sliderSection.styles';

export interface SliderSectionProps {
  children?: ReactNode;
}

export const SliderSection = ({ children }: SliderSectionProps) => {
  return (
    <Container>
      <h1>SliderSection component</h1>
      {children}
    </Container>
  );
};
