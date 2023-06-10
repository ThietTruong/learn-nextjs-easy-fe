import { MainLayout } from "@/components/layouts";
import { useAuth } from "@/hooks/use-auth";
import { Typography } from "@mui/material";
import * as React from "react";

export interface AboutProps {}

const About = (props: AboutProps) => {
  const { profile } = useAuth();

  return (
    <div>
      <Typography component="h1" variant="h1" color="primary.main">
        About page
      </Typography>
    </div>
  );
};

About.Layout = MainLayout;
export default About;
