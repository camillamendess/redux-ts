import React from "react";

// Styles
import * as Styles from "./styles";

interface CustomButtonProps {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, startIcon, ...rest }) => {
  return (
    <Styles.CustomButtonContainer {...rest}>
      {startIcon && <Styles.IconContainer>{startIcon}</Styles.IconContainer>}

      {children}
    </Styles.CustomButtonContainer>
  );
};

export default CustomButton;