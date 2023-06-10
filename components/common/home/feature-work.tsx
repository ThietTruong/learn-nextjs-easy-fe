import { WorkList } from "@/components/work";
import { Work } from "@/models";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import * as React from "react";

export interface IFeatureWorkProps {}

export function FeatureWork(props: IFeatureWorkProps) {
  const workList: Work[] = [
    {
      id: 1,
      title: "Designing Dashboards",
      tagList: ["Dashboard"],
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      createAt: "1685444152532",
      updateAt: "1685444152532",
      thumbnailUrl:
        "https://res.cloudinary.com/beee-foam/image/upload/v1685518937/learn-nextjs/featured-works/Rectangle_30_b87rdb.jpg",
    },
    {
      id: 2,
      title: "Work 2",
      tagList: ["Illustration"],
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      createAt: "1685444152532",
      updateAt: "1685444152532",
      thumbnailUrl:
        "https://res.cloudinary.com/beee-foam/image/upload/v1685518936/learn-nextjs/featured-works/Rectangle_34_o3nqam.jpg",
    },
    {
      id: 3,
      title: "Work 3",
      tagList: ["Typography"],
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      createAt: "1685444152532",
      updateAt: "1685444152532",
      thumbnailUrl:
        "https://res.cloudinary.com/beee-foam/image/upload/v1685518934/learn-nextjs/featured-works/Rectangle_32_g9e6dx.jpg",
    },
  ];

  return (
    <Box component="section" pt={2} pb={4}>
      <Container>
        <Typography variant="h5" mb={4}>
          Feature works
        </Typography>
        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
