import React, { useEffect } from 'react';
import { Meta, Story } from '@storybook/react';
import Button from '../components/Button';

type ThemeConfigProps = {
  primaryColor: string;
  secondaryColor: string;
  dangerColor: string;
};

const ThemeConfig: React.FC<ThemeConfigProps> = ({
  primaryColor,
  secondaryColor,
  dangerColor,
}) => {
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
  }, [primaryColor]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--secondary-color',
      secondaryColor
    );
  }, [secondaryColor]);

  useEffect(() => {
    document.documentElement.style.setProperty('--danger-color', dangerColor);
  }, [dangerColor]);

  return (
    <div>
      <Button text="Primary" intent="primary" />
      <Button text="Secondary" intent="secondary" />
      <Button text="Danger" intent="danger" />
    </div>
  );
};

export default {
  title: 'ThemeConfigs/Colors',
  argTypes: {},
} as Meta<typeof ThemeConfig>;

const Template: Story<ThemeConfigProps> = (args) => <ThemeConfig {...args} />;

export const Default = Template.bind({});
Default.args = {
  primaryColor: '#3b82f6',
  secondaryColor: '#a855f7',
  dangerColor: '#f43f5e',
};
