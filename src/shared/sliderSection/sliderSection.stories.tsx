import React from 'react';
import { Story } from '@storybook/react';

import { SliderSection, SliderSectionProps } from './sliderSection.component';

const Template: Story<SliderSectionProps> = (args) => {
  return <SliderSection {...args} />;
};

export default {
  title: 'SliderSection',
  component: SliderSection,
};

export const Default = Template.bind({});
Default.args = { children: 'text' };
