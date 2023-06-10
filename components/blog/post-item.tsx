import { IPost } from "@/models";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { format } from "date-fns";
import * as React from "react";

export interface IPostItemProps {
  post: IPost;
}

export function PostItem(props: IPostItemProps) {
  const { post } = props;
  if (!post) return null;
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        {post.title}
      </Typography>
      <Stack direction="row" my={2}>
        <Typography variant="body1">
          {post.publishedDay && format(new Date(post.publishedDay), "MM/dd/yyyy")}
        </Typography>
        <Divider
          orientation="vertical"
          sx={{
            mx: 2,
          }}
          flexItem
        />
        <Typography variant="body1">{post.tagList?.join(", ")}</Typography>
      </Stack>
      <Typography variant="body1">{post.description}</Typography>
    </Box>
  );
}
