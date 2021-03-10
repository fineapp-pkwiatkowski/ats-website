import React from 'react';
import { Story } from '@storybook/react';

import { AboutSection, AboutSectionProps } from './aboutSection.component';

const Template: Story<AboutSectionProps> = (args) => {
  return <AboutSection {...args} />;
};

export default {
  title: 'AboutSection',
  component: AboutSection,
};

export const Default = Template.bind({});
Default.args = { children: 'text' };
