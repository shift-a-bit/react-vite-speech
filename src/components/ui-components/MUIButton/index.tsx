import { Button, ButtonProps, IconButton } from "@mui/material";
import React from "react";

interface MUIButtonProps extends ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonProps["variant"];
  iconButton?: boolean;
}

const MUIButton: React.FC<MUIButtonProps> = ({
  children,
  iconButton,
  ...rest
}) => {
  return iconButton ? (
    <IconButton {...rest}>{children}</IconButton>
  ) : (
    <Button {...rest}>{children}</Button>
  );
};

export default MUIButton;
