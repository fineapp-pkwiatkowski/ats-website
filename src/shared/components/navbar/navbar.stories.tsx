import React from 'react';
import { Story } from '@storybook/react';

import { Navbar, NavbarProps } from './navbar.component';

const Template: Story<NavbarProps> = (args) => {
  return <Navbar {...args} />;
};

export default {
  title: 'Navbar',
  component: Navbar,
};

export const Default = Template.bind({});
Default.args = { children: 'text' };
