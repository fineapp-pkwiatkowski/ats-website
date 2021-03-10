import React, { ReactNode } from 'react';

import { Container } from './contactSection.styles';

export interface ContactSectionProps {
  children?: ReactNode;
}

export const ContactSection = ({ children }: ContactSectionProps) => {
  return (
    <Container>
      <h1>ContactSection component</h1>
      {children}
    </Container>
  );
};
