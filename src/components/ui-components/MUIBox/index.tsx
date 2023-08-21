import { Box, BoxProps } from "@mui/material";
import React from "react";

interface MUIBoxProps extends BoxProps {
  children?: React.ReactNode;
  component?: React.ElementType;
  src?: string;
  alt?: string;
}

const MUIBox: React.FC<MUIBoxProps> = ({ children, ...rest }) => {
  return <Box {...rest}>{children}</Box>;
};

export default MUIBox;
