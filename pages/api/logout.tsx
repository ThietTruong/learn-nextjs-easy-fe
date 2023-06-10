import Cookies from "cookies";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });
  const cookie = new Cookies(req, res);
  cookie.set("access_token");
  res.status(200).json({ message: "logout success" });
}
