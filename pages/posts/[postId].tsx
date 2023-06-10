import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import React from "react";

interface PostDetailPagProps {
  post: any;
}
const PostDetailPage = (props: PostDetailPagProps) => {
  const router = useRouter();
  return <div>{props.post.title}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1");
  const data = await response.json();

  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const postId = context.params?.postId;
  if (!postId) return { notFound: true };
  const response = await fetch(`http://js-post-api.herokuapp.com/api/posts/${postId}`);
  const data = await response.json();
  return {
    props: {
      post: data,
    }, // will be passed to the page component as props
  };
};
export default PostDetailPage;
