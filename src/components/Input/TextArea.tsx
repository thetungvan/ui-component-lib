import React, { FC, HTMLProps } from 'react';

export type TextAreaProps = HTMLProps<HTMLTextAreaElement>;

const TextArea: FC<TextAreaProps> = (props) => {
  return (
    <textarea
      {...props}
      className="rounded p-2 text-base leading-none shadow shadow-primary h-10"
    />
  );
};

export default TextArea;
