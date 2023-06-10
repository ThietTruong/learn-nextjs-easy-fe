// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = any;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "GET") {
    return res.status(405).json({ name: "Method not allowed" });
  }
  const response = await fetch("http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1");
  const responseJson = await response.json();

  res.status(200).json(responseJson);
}
