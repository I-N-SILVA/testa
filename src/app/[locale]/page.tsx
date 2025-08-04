import { Box, Section } from "@plyaz/ui";
import React from "react";

import ComingSoon from "src/components/ComingSoon";
import EcosystemOverview from "src/components/EcosystemOverview";
import FeatureCards from "src/components/FeatureCards";
import HeroSection from "src/components/HeroSection";
import LatestBlogs from "src/components/LatestBlogs";
import OurMission from "src/components/OurMission";
import OurPartners from "src/components/OurPartners";
import OurTeam from "src/components/OurTeam";

export default function Home(): React.ReactElement {
  if (process.env.NEXT_PUBLIC_COMING_SOON === "true") {
    return <ComingSoon />;
  }

  return (
    <Box element="main">
      <HeroSection />
      <FeatureCards />
      <EcosystemOverview />
      <Section>
        <OurMission />
        <OurPartners />
        <OurTeam />
        <LatestBlogs />
      </Section>
    </Box>
  );
}
