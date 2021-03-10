import React, { ReactNode } from 'react';

import { Container } from './tilesSection.styles';

export interface TilesSectionProps {
  children?: ReactNode;
}

export const TilesSection = ({ children }: TilesSectionProps) => {
  return (
    <Container>
      <h1>TilesSection component</h1>
      {children}
    </Container>
  );
};
