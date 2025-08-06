"use client";


import { useRef } from "react";
import { Box, Flex, Heading } from "@plyaz/ui";
import { useTranslation } from "@plyaz/translations/frontend";

import { MISSIONS } from "@/constants";

import { MissionSlide } from "./MissionSlide";

const OurMission = () => {
  const ref = useRef(null);
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({
    container: ref,
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Flex
      element="section"
      direction="col"
      className="gap-8 lg:gap-0 px-4 lg:px-20 lg:py-28 h-full"
    >
      <Heading
        element="h3"
        size="3xl"
        className="font-semibold text-primary-foreground text-5xl text-center"
      >
        {t("OurMission.title")}
      </Heading>
      <Box className="relative flex-1">
        <div
          className="block bottom-0 left-0 z-50 absolute mx-auto w-full xl:max-w-full max-w-5xl h-1 origin-center bg-accent-hover"
          style={{ scaleX }}
          initial={{ visibility: "hidden" }}
          animate={{ visibility: "visible" }}
        />
        <div
          id="example"
          ref={ref}
          // TODO: To add a custom class, ignoring this rule, can be fixed later in the devtools
          // eslint-disable-next-line better-tailwindcss/no-unregistered-classes
          className="z-0 lg:mx-auto xl:p-28 xl:pt-0 xl:pb-0 max-w-full xl:max-w-full lg:max-w-5xl sm:h-[500px] max-h-96 sm:max-h-[500px] overflow-y-scroll snap-mandatory snap-y no-scrollbar"
        >
          {MISSIONS.map((mission) => (
            <MissionSlide
              key={mission.id}
              id={mission.id}
              title={mission.title}
            />
          ))}
        </div>
      </Box>
    </Flex>
  );
};
export default OurMission;
