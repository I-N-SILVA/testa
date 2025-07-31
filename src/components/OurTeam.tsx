import React from "react";
import { Box, Container, Flex, Heading, Section } from "@plyaz/ui";
import { useTranslation } from "@plyaz/translations/frontend";

import { TEAM_MEMBERS } from "@/constants";

import { Members } from "./Members";
import { Member } from "./Member";

const OurTeam = () => {
  const { t } = useTranslation();

  const ceo = TEAM_MEMBERS.find((member) => member.id === 1);
  const others = TEAM_MEMBERS.filter((member) => member.id !== 1);

  return (
    <Section className="pt-16 lg:pt-28">
      <Heading
        element="h3"
        size="3xl"
        className="xl:mb-12 font-semibold text-foreground lg:text-5xl text-center"
      >
        {t("OurTeam.title")}
      </Heading>
      <Container className="flex lg:bg-[url('public/assets/svgs/football-field-emerald.svg')] lg:bg-contain lg:bg-no-repeat lg:bg-center px-0 h-full min-h-full">
        <Flex
          className="w-full"
          direction="col"
          justify="center"
          align="center"
          wrap="wrap"
        >
          <Box className="lg:mt-10 xl:mt-24 mb-16 pt-10 xl:pt-0 w-full">
            <Flex direction="col" gap="5" justify="center" align="center">
              {ceo && <Member name={ceo.name} role={ceo.role} id={ceo.id} />}
            </Flex>

            {others && <Members members={others} />}
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};

export default OurTeam;
