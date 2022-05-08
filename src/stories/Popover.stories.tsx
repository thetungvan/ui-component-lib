import React from 'react';
import { Story, Meta } from '@storybook/react';

import Popover, { PopoverProp } from '../components/Popover';
import Button from '../components/Button';

export default {
  title: 'Components/Popover',
  component: Popover,
  argTypes: {},
} as Meta<typeof Popover>;

const Template: Story<PopoverProp> = (args) => (
  <Popover {...args}>
    <div className="text-center">
      <Button text="Popover" />
    </div>
  </Popover>
);

const PopoverContent = () => (
  <div>
    You're requesting to delete this member
    <div>
      <Button text="Are you sure?" />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Confirmation',
  content: <PopoverContent />,
};
