import { Link as MuiLink } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import Link from "next/link";
import { ROUTER_LIST } from "./routers";
import React from "react";
import clsx from "clsx";
import { useRouter } from "next/router";

export interface IHeaderDesktopProps {}

export const HeaderDesktop = (props: IHeaderDesktopProps) => {
  const router = useRouter();
  // const pathname = usePathname();
  return (
    <Container>
      <Box
        display={{
          xs: "none",
          md: "block",
        }}
        py={2}
        px={0}
      >
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          {ROUTER_LIST.map((route) => (
            <React.Fragment key={route.path}>
              <MuiLink
                component={Link}
                href={route.path}
                passHref
                underline="hover"
                fontWeight="medium"
                className={clsx({ active: router.pathname === route.path })}
              >
                {route.label}
              </MuiLink>
            </React.Fragment>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};
