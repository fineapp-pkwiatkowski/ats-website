import React from 'react';
import { Story } from '@storybook/react';

import { Footer, FooterProps } from './footer.component';

const Template: Story<FooterProps> = (args) => {
  return <Footer {...args} />;
};

export default {
  title: 'Footer',
  component: Footer,
};

export const Default = Template.bind({});
Default.args = { children: 'text' };
