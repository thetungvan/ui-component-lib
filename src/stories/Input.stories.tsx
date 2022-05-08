import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import Input, {
  InputProps,
  TextArea,
  TextAreaProps,
} from '../components/Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {},
} as Meta<typeof Input>;

const InputTemplate: Story<InputProps> = ({ value, ...otherProps }) => {
  const [valueInput, setValueInput] = useState(value);

  React.useEffect(() => {
    setValueInput(value);
  }, [value]);

  return (
    <Input
      value={valueInput}
      onChange={(e) => setValueInput(e.currentTarget.value)}
      {...otherProps}
    />
  );
};

const TextAreaTemplate: Story<TextAreaProps> = ({ value, ...otherProps }) => {
  const [valueInput, setValueInput] = useState(value);

  React.useEffect(() => {
    setValueInput(value);
  }, [value]);

  return (
    <TextArea
      value={valueInput}
      onChange={(e) => setValueInput(e.currentTarget.value)}
      {...otherProps}
    />
  );
};

export const Default = InputTemplate.bind({});
Default.args = {
  value: 'Hello world',
  type: 'text',
};

export const TextAreaType = TextAreaTemplate.bind({});
TextAreaType.args = {
  value: 'Hello world',
};
