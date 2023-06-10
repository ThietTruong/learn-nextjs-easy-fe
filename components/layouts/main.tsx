import { LayoutProps } from "@/models";
import Link from "next/link";
import * as React from "react";
import { Auth } from "../common/auth";
import { Box, Container, Stack } from "@mui/system";
import { Footer } from "../common";
import Header from "../common/header";

export interface IMainLayoutProps {}

export function MainLayout(props: LayoutProps) {
  const { children } = props;
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box flexGrow={1}>{children}</Box>
      <Footer></Footer>
    </Stack>
  );
}
