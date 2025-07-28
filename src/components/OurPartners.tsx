import { Container, Flex, Heading, Section } from "@plyaz/ui";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

import GrandSport from "@/public/Grand_sport.svg";
import RiseLogo from "@/public/Rise_logo.svg";
import ArdeUniversity from "@/public/ARDEN_university_logo.svg";

const OurPartners = () => {
  const t = useTranslations("OurPartners");
  return (
    <Section>
      <Container className="w-full">
        <Flex
          justify="center"
          align="center"
          direction="col"
          className="gap-8 lg:gap-16"
        >
          <Heading element="h3" size="3xl" className="font-medium lg:text-5xl">
            {t("title")}
          </Heading>

          <Flex
            justify="between"
            align="center"
            className="gap-10 px-0 lg:px-10 w-full"
            wrap="wrap"
          >
            <Image
              src={GrandSport}
              alt="Grand Sport Logo"
              className="flex-1 self-center w-[270px] h-[80px]"
            />

            <Image
              src={RiseLogo}
              alt="Rise Logo"
              className="flex-1 self-center w-[116px] h-[76px]"
            />
            <Image
              src={ArdeUniversity}
              alt="Arde University Logo"
              className="flex-1 self-center w-[303px] h-[76px]"
            />
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};

export default OurPartners;
