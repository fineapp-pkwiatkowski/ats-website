import React from 'react';

import { makeContextRenderer } from '../../../../shared/utils/testUtils';
import { InfoSection, InfoSectionProps } from '../infoSection.component';

describe('InfoSection: Component', () => {
  const defaultProps: InfoSectionProps = {};

  const component = (props: Partial<InfoSectionProps>) => <InfoSection {...defaultProps} {...props} />;
  const render = makeContextRenderer(component);

  it('should render without errors', () => {
    render();
  })
});
