import { Grid, Link as MuiLink, Paper, Typography } from "@mui/material";
import { Box, Container, Stack, styled } from "@mui/system";
import Link from "next/link";
import * as React from "react";
import { PostCard } from "./post-card";
import { IPost } from "@/models";

export interface IRecentPostsProps {}

export function RecentPosts(props: IRecentPostsProps) {
  const postList: IPost[] = [
    {
      id: 1,
      title: "Post 1",
      publishedDay: "2023-06-04T00:00:00.000Z",
      tagList: ["tag1", "tag2"],
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      slug: "post-1",
      thumbnailUrl: "",
    },
    {
      id: 2,
      title: "Vibrant Portraits of 2020",
      publishedDay: "2023-06-04T00:00:00.000Z",
      tagList: ["tag1", "tag2"],
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      slug: "vibrant-portraits-of-2020",
      thumbnailUrl: "",
    },
    {
      id: 3,
      title: "36 Days of Malayalam type",
      publishedDay: "2023-06-04T00:00:00.000Z",
      tagList: ["tag1", "tag2"],
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      slug: "36-days-of-malayalam-type",
      thumbnailUrl: "",
    },
  ];

  return (
    <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
      <Container>
        <Stack
          direction="row"
          justifyContent={{
            xs: "center",
            md: "space-between",
          }}
          alignItems="center"
          pb={2}
        >
          <Typography variant="h5">Recent posts</Typography>
          <MuiLink component={Link} href="#">
            View all
          </MuiLink>
        </Stack>
        <Stack flexWrap="wrap" width="100%" direction="row" spacing={2} useFlexGap>
          {postList.map((post) => (
            <Box
              key={post.id}
              width={{
                xs: "100%",
                sm: "calc(50% - 16px)",
              }}
            >
              <PostCard {...post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
