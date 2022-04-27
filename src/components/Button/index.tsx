import React from "react";

import { ContainerButton } from "./styles";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  width?: string;
  outline?: boolean;
  margin?: string;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled,
  margin,
  outline,
  width,
}) => {
  return (
    <ContainerButton
      width={width}
      disabled={disabled}
      outline={outline}
      margin={margin}
      onClick={onClick}
    >
      {children}
    </ContainerButton>
  );
};

export default Button;
