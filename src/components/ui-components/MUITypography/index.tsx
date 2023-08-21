import { Typography, TypographyProps } from "@mui/material";
import React from "react";

interface MUITypographyProps extends TypographyProps {
  children?: React.ReactNode;
}

const MUITypography: React.FC<MUITypographyProps> = ({ children, ...rest }) => {
  return <Typography {...rest}>{children}</Typography>;
};

export default MUITypography;
