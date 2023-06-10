import { IPost } from "@/models";
import { getPostList } from "@/utils/post";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import remarkParse from "remark-parse";
import { unified } from "unified";
import rehypeDocument from "rehype-document";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import { Box, Divider } from "@mui/material";
import { Container } from "@mui/system";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import { MainLayout } from "@/components/layouts";
import remarkPrism from "remark-prism";
import Script from "next/script";
import { Seo, SeoData } from "@/components/common/seo";

interface PostDetailPagProps {
  post: IPost;
}
const PostDetailPage = (props: PostDetailPagProps) => {
  const { post } = props;
  if (!props.post) return null;
  const seoData: SeoData = {
    title: post.title,
    description: post.description,
    url: `${process.env.NEXT_PUBLIC_HOST_URL}/blog/${post.slug}`,
    thumbnailUrl: post.thumbnailUrl,
  };
  return (
    <Box>
      <Seo data={seoData}></Seo>
      <Container>
        <h1>Post page detail</h1>
        <p>{post.title}</p>
        <p>{post.author?.name}</p>
        <p>{post.description}</p>
        <div dangerouslySetInnerHTML={{ __html: post.htmlContent || "" }}></div>
      </Container>
      <Script src="/prism.js" strategy="afterInteractive"></Script>
    </Box>
  );
};

PostDetailPage.Layout = MainLayout;
export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPostList();
  return {
    paths: postList.map((post: IPost) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params?.slug;
  if (!slug) return { notFound: true };

  const postList = await getPostList();
  const post = postList.find((post: IPost) => {
    return post.slug === slug;
  });

  if (!post) return { notFound: true };
  post.htmlContent = "";
  const file = await unified()
    .use(remarkParse)
    .use(remarkToc, { heading: "Agenda.*" })
    .use(remarkPrism, {})
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "wrap",
    })
    .use(rehypeDocument, { title: post.title })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post?.mdContent || "");

  post.htmlContent = file.toString();

  return {
    props: {
      post,
    }, // will be passed to the page component as props
  };
};
export default PostDetailPage;
