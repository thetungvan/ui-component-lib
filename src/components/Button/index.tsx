import React, { MouseEventHandler, FC } from 'react';

type IntentType = 'default' | 'success' | 'error' | undefined;
type VariantType = 'primary' | 'secondary' | 'link' | undefined;

export interface ButtonProps {
  intent?: IntentType;
  variant?: VariantType;
  text: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const variantConfig = {
  primary: {
    border: 'border-0',
    color: 'text-white',
  },
  secondary: {
    border: 'border-2',
    backgroundColor: 'bg-inherit',
  },
  link: {
    border: 'border-0',
    backgroundColor: 'bg-inherit',
    onHover: 'hover:underline hover:decoration-solid',
  },
};

const intentConfig = {
  default: {
    color: 'text-blue-800',
    borderColor: 'border-blue-800',
    backgroundColor: 'bg-blue-800',
  },
  success: {
    color: 'text-green-400',
    borderColor: 'border-green-400',
    backgroundColor: 'bg-green-400',
  },
  error: {
    color: 'text-rose-500',
    borderColor: 'border-rose-500',
    backgroundColor: 'bg-rose-500',
  },
};

const getButtonConfigs = ({
  intent = 'default',
  variant = 'primary',
}: {
  intent: IntentType;
  variant: VariantType;
}) => {
  const config = {
    fontSize: 'text-base',
    cursor: 'pointer',
    borderRadius: 'rounded-lg',
    padding: 'py-1 px-4',
    ...intentConfig[intent],
    ...variantConfig[variant],
  };

  return Object.values(config).join(' ');
};

const Button: FC<ButtonProps> = ({
  disabled,
  text,
  onClick,
  intent,
  variant,
}) => {
  return (
    <button
      className={getButtonConfigs({ intent, variant })}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
