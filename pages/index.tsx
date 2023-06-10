import { FeatureWork, HeroSection, RecentPosts } from "@/components/common/home";
import { MainLayout } from "@/components/layouts";
import { useAuth } from "@/hooks/use-auth";
import { NextPageWithLayout } from "@/models";
import { Box } from "@mui/system";

const Home: NextPageWithLayout = () => {
  const { profile } = useAuth();
  return (
    <Box>
      <HeroSection></HeroSection>
      <RecentPosts></RecentPosts>
      <FeatureWork></FeatureWork>
    </Box>
  );
};

Home.Layout = MainLayout;
export default Home;
