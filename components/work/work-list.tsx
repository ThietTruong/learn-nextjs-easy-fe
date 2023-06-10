import { Work } from "@/models/work";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import { WorkCard } from "./work-card";

interface IWorkListProps {
  workList: Work[];
}
export function WorkList(props: IWorkListProps) {
  const { workList } = props;
  if (!workList || workList.length === 0) return null;

  return (
    <Box>
      {workList.map((work) => (
        <Fragment key={work.id}>
          <WorkCard work={work} />
          <Divider sx={{ my: 2 }} />
        </Fragment>
      ))}
    </Box>
  );
}
