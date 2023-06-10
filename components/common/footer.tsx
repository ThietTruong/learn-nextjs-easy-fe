import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import * as React from "react";
import { Typography, Box, Stack } from "@mui/material";

export interface IFooterProps {}

export const Footer = (props: IFooterProps) => {
  const socialLink = [
    {
      icon: <Facebook />,
      url: "https://www.facebook.com/",
    },
    {
      icon: <Instagram />,
      url: "https://www.instagram.com/",
    },
    {
      icon: <Twitter />,
      url: "https://twitter.com/",
    },
    {
      icon: <LinkedIn />,
      url: "https://www.linkedin.com/",
    },
  ];
  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack direction="row" justifyContent="center">
        {socialLink.map((item) => (
          <Box
            component="a"
            key={item.url}
            fontSize="large"
            p={2}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Box>
        ))}
      </Stack>
      <Typography>Copyright ©{new Date().getFullYear()} All rights reserved </Typography>
    </Box>
  );
};
