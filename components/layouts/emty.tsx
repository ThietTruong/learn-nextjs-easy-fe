import { LayoutProps } from "@/models";
import Link from "next/link";
import * as React from "react";

export interface IEmptyLayoutProps {}

export function EmptyLayout(props: LayoutProps) {
  const { children } = props;
  return <>{children}</>;
}
