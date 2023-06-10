import * as React from "react";
import useSWR from "swr";
export interface StudentDetailProps {
  studentId: string;
}
const MILLISECOND = 60 * 60 * 1000;

export function StudentDetail({ studentId }: StudentDetailProps) {
  const { data, error } = useSWR(`/students/${studentId}`, {
    refreshInterval: MILLISECOND,
    revalidateOnFocus: true,
  });

  return <div>{data?.name || "--"}</div>;
}
