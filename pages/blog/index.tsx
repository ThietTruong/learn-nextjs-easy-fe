import { PostItem } from "@/components/blog";
import { MainLayout } from "@/components/layouts";
import { IPost } from "@/models";
import { getPostList } from "@/utils/post";
import { Box, Divider } from "@mui/material";
import { Container } from "@mui/system";
import { GetStaticProps } from "next";
import Link from "next/link";
import * as React from "react";

export interface BlogListPageProps {
  posts: IPost[];
}

export default function BlogListPage(props: BlogListPageProps) {
  const { posts } = props;
  return (
    <Container>
      <Box
        pt={{
          xs: 4,
          md: 18,
        }}
      >
        <h1>Blog</h1>
        <Box
          component="ul"
          sx={{
            listStyle: "none",
            p: 0,
          }}
        >
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <PostItem post={post} />
              </Link>
              <Divider sx={{ my: 3 }} />
            </li>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

BlogListPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps<BlogListPageProps> = async (context) => {
  const postList: IPost[] = await getPostList();

  return {
    props: {
      posts: postList,
    },
  };
};
