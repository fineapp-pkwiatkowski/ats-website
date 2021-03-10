import React from 'react';

import { makeContextRenderer } from '../../../../shared/utils/testUtils';
import { Navbar, NavbarProps } from '../navbar.component';

describe('Navbar: Component', () => {
  const defaultProps: NavbarProps = {};

  const component = (props: Partial<NavbarProps>) => <Navbar {...defaultProps} {...props} />;
  const render = makeContextRenderer(component);

  it('should render without errors', () => {
    render();
  })
});
