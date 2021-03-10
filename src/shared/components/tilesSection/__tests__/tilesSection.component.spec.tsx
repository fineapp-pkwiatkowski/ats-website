import React from 'react';

import { makeContextRenderer } from '../../../../shared/utils/testUtils';
import { TilesSection, TilesSectionProps } from '../tilesSection.component';

describe('TilesSection: Component', () => {
  const defaultProps: TilesSectionProps = {};

  const component = (props: Partial<TilesSectionProps>) => <TilesSection {...defaultProps} {...props} />;
  const render = makeContextRenderer(component);

  it('should render without errors', () => {
    render();
  })
});
