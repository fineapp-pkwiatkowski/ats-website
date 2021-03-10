import React, { ReactNode } from 'react';

import { Container } from './navbar.styles';

export interface NavbarProps {
  children?: ReactNode;
}

export const Navbar = ({ children }: NavbarProps) => {
  return (
    <Container>
      <h1>Navbar component</h1>
      {children}
    </Container>
  );
};
