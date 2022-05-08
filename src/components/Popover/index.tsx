import React, { FC } from 'react';
import * as PopoverRadix from '@radix-ui/react-popover';
import { Cross2Icon } from '@radix-ui/react-icons';

export type PopoverProp = {
  title?: React.ReactNode;
  content: React.ReactNode;
  children: React.ReactChild;
};

const Popover: FC<PopoverProp> = ({ title, content, children }) => {
  return (
    <PopoverRadix.Root>
      <PopoverRadix.Trigger asChild>{children}</PopoverRadix.Trigger>
      <PopoverRadix.Content
        sideOffset={5}
        className="rounded p-4 bg-white shadow-lg w-80"
      >
        <div className="mb-2 text-lg font-medium">{title}</div>
        {content}
        <PopoverRadix.Arrow />
        <PopoverRadix.Close
          aria-label="Close"
          className="rounded-full inline-flex items-center justify-center absolute top-1 right-1 h-5 w-5"
        >
          <Cross2Icon />
        </PopoverRadix.Close>
      </PopoverRadix.Content>
    </PopoverRadix.Root>
  );
};

export default Popover;
