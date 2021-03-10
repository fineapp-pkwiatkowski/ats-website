import React, { ReactNode } from 'react';

import { Container } from './footer.styles';

export interface FooterProps {
  children?: ReactNode;
}

export const Footer = ({ children }: FooterProps) => {
  return (
    <Container>
      <h1>Footer component</h1>
      {children}
    </Container>
  );
};
