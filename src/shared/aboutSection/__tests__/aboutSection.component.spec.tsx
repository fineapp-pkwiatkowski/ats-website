import React from 'react';

import { makeContextRenderer } from '../../../../shared/utils/testUtils';
import { AboutSection, AboutSectionProps } from '../aboutSection.component';

describe('AboutSection: Component', () => {
  const defaultProps: AboutSectionProps = {};

  const component = (props: Partial<AboutSectionProps>) => <AboutSection {...defaultProps} {...props} />;
  const render = makeContextRenderer(component);

  it('should render without errors', () => {
    render();
  })
});
