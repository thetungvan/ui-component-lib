import React, { MouseEventHandler, FC } from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  text?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: 9px 30px 11px;
  color: #1b116e;
  background-color: #6bedb5;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: #55bd90;
  }
  &:active {
    border: solid 2px #1b116e;
    padding: 7px 28px 9px;
  }
`;

const Button: FC<ButtonProps> = ({ disabled, text, onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
