import { Button, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import * as React from "react";
import avatar from "@/images/avatar.png";
import Image from "next/image";

export interface IHeroSectionProps {}

export function HeroSection(props: IHeroSectionProps) {
  return (
    <Box
      component="section"
      pt={{
        xs: 4,
        md: 18,
      }}
      pb={{
        xs: 7,
        md: 9,
      }}
    >
      <Container>
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          alignItems={{
            xs: "center",
            md: "flex-start",
          }}
          textAlign={{
            xs: "center",
            md: "left",
          }}
          spacing={8}
        >
          <Box>
            <Typography
              component="h1"
              variant="h3"
              fontWeight="bold"
              mb={{
                xs: 3.5,
                md: 5,
              }}
            >
              Hi, I am John,
              <br /> Creative Technologist
            </Typography>
            <Typography
              mb={{
                xs: 3.5,
                md: 5,
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </Typography>
            <Button variant="contained" size="large">
              Download Resume
            </Button>
          </Box>
          <Box
            component="div"
            minWidth={{
              xs: "170px",
              md: "240px",
            }}
            height="auto"
            sx={{
              boxShadow: "-5px 13px",
              color: "secondary.light",
              borderRadius: "100%",
            }}
          >
            <Image
              src={avatar}
              alt="avatar"
              style={{ width: "100%", height: "auto" }}
              priority={true}
            ></Image>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
