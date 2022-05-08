import React, { MouseEventHandler, FC } from 'react';
import loadingImg from '../assets/loading.svg';

type IntentType = 'default' | 'success' | 'error' | undefined;
type VariantType = 'primary' | 'secondary' | 'link' | undefined;

export interface ButtonProps {
  intent?: IntentType;
  variant?: VariantType;
  text: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
}

const variantConfig = {
  primary: {
    border: 'border-0',
    color: 'text-white',
    disabled:
      'disabled:text-slate-500 disabled:bg-slate-300 disabled:cursor-not-allowed',
  },
  secondary: {
    border: 'border-2',
    backgroundColor: 'bg-inherit',
    disabled:
      'disabled:text-slate-300 disabled:border-slate-300 disabled:cursor-not-allowed',
  },
  link: {
    border: 'border-0',
    backgroundColor: 'bg-inherit',
    onHover: 'hover:underline hover:decoration-solid',
    disabled: 'disabled:text-slate-400 disabled:cursor-not-allowed',
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
  disabled: boolean;
}) => {
  const config = {
    fontSize: 'text-base',
    cursor: 'pointer',
    borderRadius: 'rounded-lg',
    padding: 'py-1 px-4',
    display: 'inline-flex',
    alignItems: 'items-center',
    ...intentConfig[intent],
    ...variantConfig[variant],
  };

  return Object.values(config).join(' ');
};

const Button: FC<ButtonProps> = ({
  disabled = false,
  text,
  onClick,
  intent,
  variant,
  loading = false,
}) => {
  return (
    <button
      className={getButtonConfigs({ intent, variant, disabled })}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? <img src={loadingImg} className="w-[20px] mr-1" /> : null}
      <span>{text}</span>
    </button>
  );
};

export default Button;
