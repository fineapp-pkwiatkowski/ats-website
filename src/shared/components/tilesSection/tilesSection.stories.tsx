import React from 'react';
import { Story } from '@storybook/react';

import { TilesSection, TilesSectionProps } from './tilesSection.component';

const Template: Story<TilesSectionProps> = (args) => {
  return <TilesSection {...args} />;
};

export default {
  title: 'TilesSection',
  component: TilesSection,
};

export const Default = Template.bind({});
Default.args = { children: 'text' };
