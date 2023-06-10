import * as React from "react";
import { HeaderDesktop } from "./header-desktop";
import { HeaderMobile } from "./header-mobile";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <>
      <HeaderDesktop></HeaderDesktop>
      <HeaderMobile></HeaderMobile>
    </>
  );
}
