import React, { ReactNode } from 'react';

import { Container } from './infoSection.styles';

export interface InfoSectionProps {
  children?: ReactNode;
}

export const InfoSection = ({ children }: InfoSectionProps) => {
  return (
    <Container>
      <h1>InfoSection component</h1>
      {children}
    </Container>
  );
};
