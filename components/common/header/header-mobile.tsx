import { Box } from "@mui/system";
import React from "react";

export interface HeaderMobileProps {}
export const HeaderMobile = (props: HeaderMobileProps) => {
  return <Box display={{ xs: "block", md: "none" }}>HeaderMobile</Box>;
};
