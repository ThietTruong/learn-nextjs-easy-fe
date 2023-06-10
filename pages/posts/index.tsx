import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";

interface Post {
  id: string;
  title: string;
  author: string;
  description: string;
  delectus: string;
  createdAt: string;
  updatedAt: string;
  imageUrl: string;
}
interface Props {
  posts: Post[];
}

const PostListPage = (props: Props) => {
  const { posts } = props;
  return (
    <div>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default PostListPage;

export const getStaticProps = async () => {
  const response = await fetch("http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1");
  const { data } = await response.json();
  return {
    props: {
      posts: data,
    }, // will be passed to the page component as props
  };
};
