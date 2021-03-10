import React from 'react';

import { makeContextRenderer } from '../../../../shared/utils/testUtils';
import { ContactSection, ContactSectionProps } from '../contactSection.component';

describe('ContactSection: Component', () => {
  const defaultProps: ContactSectionProps = {};

  const component = (props: Partial<ContactSectionProps>) => <ContactSection {...defaultProps} {...props} />;
  const render = makeContextRenderer(component);

  it('should render without errors', () => {
    render();
  })
});
