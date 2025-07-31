import { useTranslation } from "@plyaz/translations/frontend";
import { Box, Paragraph, Section } from "@plyaz/ui";
import { useRef } from "react";

import { type Mission } from "@/constants";

export const MissionSlide = ({ id, title }: Mission) => {
  const { t } = useTranslation();

  const ref = useRef(null);

  return (
    <Section
      className={
        "relative flex justify-center items-center h-96 sm:h-[500px] sm:max-h-[500px] snap-start"
      }
    >
      <div
        ref={ref}
        className="relative flex flex-col justify-center items-center"
      >
        <Box
          className={
            "absolute flex justify-center items-center bg-[url('public/assets/svgs/our-mission.svg')] bg-contain bg-no-repeat w-[340px] h-[340px]"
          }
        >
          <Paragraph
            size="base"
            className="text-[300px] text-success-foreground/15"
          >
            {id}
          </Paragraph>
        </Box>
        <Paragraph
          size="xs"
          className="w-full h-full font-medium text-primary-foreground text-5xl text-center lg:whitespace-pre-line"
        >
          {t(title as keyof typeof t)}
        </Paragraph>
      </div>
    </Section>
  );
};
