import Cookies from "cookies";
import httpProxy, { ProxyResCallback } from "http-proxy";
import { NextApiRequest, NextApiResponse } from "next";
const proxy = httpProxy.createProxyServer({});

type Data = {
  message: string;
};
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  return new Promise((resolve) => {
    // don't send cookies to api server
    req.headers.cookie = "";
    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = "";
      proxyRes.on("data", (chunk) => {
        body += chunk;
      });
      proxyRes.on("end", () => {
        try {
          const { accessToken, expireAt } = JSON.parse(body);
          console.log("accessToken", accessToken);
          console.log("expireAt", expireAt);

          // convertion accessToken to cookie
          const cookie = new Cookies(req, res, {
            secure: process.env.NODE_ENV !== "development",
          });
          cookie.set("access_token", accessToken, {
            httpOnly: true,
            sameSite: "lax",
            expires: new Date(expireAt),
          });
          (res as NextApiResponse).status(200).json({
            message: "login success",
          });
        } catch (error) {
          (res as NextApiResponse).status(500).json({
            message: "login failed",
          });
        }
        resolve(true);
      });
    };

    proxy.once("proxyRes", handleLoginResponse);
    proxy.web(req, res, {
      target: process.env.NEXT_PUBLIC_API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    });
  });
}
