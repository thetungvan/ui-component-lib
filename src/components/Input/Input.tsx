import React, { FC, HTMLProps } from 'react';

export type InputProps = HTMLProps<HTMLInputElement>;

const Input: FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      className="rounded px-2 text-base leading-none shadow shadow-primary h-10"
    />
  );
};

export default Input;
