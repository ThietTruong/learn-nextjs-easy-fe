import Cookies from "cookies";
import httpProxy from "http-proxy";
import { NextApiRequest, NextApiResponse } from "next";

const proxy = httpProxy.createProxyServer({});

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  // convert cookie to header authorization
  const cookie = new Cookies(req, res);
  const accessToken = cookie.get("access_token");
  if (cookie) {
    req.headers.authorization = `Bearer ${accessToken}`;
  }
  // don't send cookies to api server
  req.headers.cookie = "";

  // req.headers.cookie = req.headers.cookie || "";
  proxy.web(req, res, {
    target: process.env.NEXT_PUBLIC_API_URL,
    changeOrigin: true,
    selfHandleResponse: false,
  });
  //   proxy.once("proxyRes", () => resolve(true));
}
