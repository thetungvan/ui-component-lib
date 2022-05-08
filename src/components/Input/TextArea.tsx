import React, { FC, HTMLProps } from 'react';

export type TextAreaProps = HTMLProps<HTMLTextAreaElement>;

const TextArea: FC<TextAreaProps> = (props) => {
  return (
    <textarea
      {...props}
      className="rounded px-2 text-base leading-none shadow shadow-current h-10"
    />
  );
};

export default TextArea;
