import { LayoutProps } from "@/models";
import Link from "next/link";
import * as React from "react";
import { Auth } from "../common/auth";

export interface IAdminLayoutProps {}

export function AdminLayout(props: LayoutProps) {
  const { children } = props;
  return (
    <Auth>
      <h1>AdminLayout</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <div>{children}</div>
    </Auth>
  );
}
