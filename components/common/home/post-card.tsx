import { PostItem } from "@/components/blog";
import { IPost } from "@/models";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { format } from "date-fns";
import * as React from "react";

export function PostCard(post: IPost) {
  const { title, publishedDay, tagList, description } = post;
  if (!post) return null;
  return (
    <Card>
      <CardContent>
        <PostItem post={post} />
      </CardContent>
    </Card>
  );
}
