import React from 'react';

import { makeContextRenderer } from '../../../../shared/utils/testUtils';
import { SliderSection, SliderSectionProps } from '../sliderSection.component';

describe('SliderSection: Component', () => {
  const defaultProps: SliderSectionProps = {};

  const component = (props: Partial<SliderSectionProps>) => <SliderSection {...defaultProps} {...props} />;
  const render = makeContextRenderer(component);

  it('should render without errors', () => {
    render();
  })
});
