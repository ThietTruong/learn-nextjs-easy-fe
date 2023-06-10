import { Work } from "@/models";
import { Box, Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import * as React from "react";

export interface IWorkCardProps {
  work: Work;
}

export function WorkCard(props: IWorkCardProps) {
  const { work } = props;
  if (!work) return null;

  return (
    <Stack
      direction={{
        xs: "column",
        md: "row",
      }}
      spacing={2}
    >
      <Box
        width={{
          xs: "100%",
          md: "246px",
        }}
        flexShrink={0}
      >
        <Image width={246} height={180} src={work.thumbnailUrl} alt="Work thumbnail"></Image>
      </Box>
      <Box>
        <Typography variant="h4">{work.title}</Typography>
        <Stack direction="row" my={2}>
          <Chip
            label={new Date(Number.parseInt(work.createAt)).getFullYear()}
            size="small"
            color="secondary"
          />
          <Typography ml={3} color="GrayText">
            {work.tagList.join(", ")}
          </Typography>
        </Stack>
        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  );
}
