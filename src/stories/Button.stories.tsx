import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from '../components/Button';

export default {
  title: 'Marbella/Button',
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  text: 'Default',
};

export const OnClick = Template.bind({});
OnClick.args = {
  disabled: false,
  text: 'OnClick',
  onClick: () => console.log('Clicked'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  text: 'Disabled',
};
