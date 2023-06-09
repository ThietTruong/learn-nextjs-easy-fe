import React from "react";
import Head from "next/head";

export interface SeoData {
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
}
export interface ISeoProps {
  data: SeoData;
}

export function Seo(props: ISeoProps) {
  const {
    data: { title, description, url, thumbnailUrl },
  } = props;
  return (
    <Head>
      <title>Meta Tags — Preview, Edit and Generate</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnailUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={thumbnailUrl}></meta>
    </Head>
  );
}
