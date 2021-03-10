import React from 'react';

import { makeContextRenderer } from '../../../../shared/utils/testUtils';
import { Footer, FooterProps } from '../footer.component';

describe('Footer: Component', () => {
  const defaultProps: FooterProps = {};

  const component = (props: Partial<FooterProps>) => <Footer {...defaultProps} {...props} />;
  const render = makeContextRenderer(component);

  it('should render without errors', () => {
    render();
  })
});
