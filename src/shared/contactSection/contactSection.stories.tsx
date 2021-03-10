import React from 'react';
import { Story } from '@storybook/react';

import { ContactSection, ContactSectionProps } from './contactSection.component';

const Template: Story<ContactSectionProps> = (args) => {
  return <ContactSection {...args} />;
};

export default {
  title: 'ContactSection',
  component: ContactSection,
};

export const Default = Template.bind({});
Default.args = { children: 'text' };
