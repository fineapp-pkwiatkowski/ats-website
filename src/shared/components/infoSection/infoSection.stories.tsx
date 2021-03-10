import React from 'react';
import { Story } from '@storybook/react';

import { InfoSection, InfoSectionProps } from './infoSection.component';

const Template: Story<InfoSectionProps> = (args) => {
  return <InfoSection {...args} />;
};

export default {
  title: 'InfoSection',
  component: InfoSection,
};

export const Default = Template.bind({});
Default.args = { children: 'text' };
