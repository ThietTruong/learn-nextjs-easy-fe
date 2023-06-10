import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/router";
import * as React from "react";
import { useEffect } from "react";

export interface IAuthProps {
  children: React.ReactNode;
}

export function Auth(props: IAuthProps) {
  const { children } = props;
  const router = useRouter();
  const { profile, fistLoading } = useAuth();
  useEffect(() => {
    if (!fistLoading && !profile?.username) {
      router.push("/login");
    }
  }, [profile, fistLoading, router]);

  // if (!profile?.username) return <div>Loading...</div>;

  return <div>{children}</div>;
}
