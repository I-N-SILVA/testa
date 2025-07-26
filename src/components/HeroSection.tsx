import { Flex, Heading, Paragraph, Section, Button } from "@plyaz/ui";
import { useTranslations } from "next-intl";
import React from "react";

import { cn } from "src/utils/cn";

import NavigationHeader from "./NavigationHeader";

const HeroSection = () => {
  const t = useTranslations("HeroSection");

  return (
    <Section className="p-0 w-full h-dvh">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="z-0 relative w-full h-full object-cover"
        poster="hero_image.png"
      >
        <source src="mobile_hero.webm" media="(width <= 1024px)" />
        <source src="web_hero.webm" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <NavigationHeader />
      <Flex
        className="top-0 left-0 z-10 absolute bg-gradient-to-b from-31% from-white/10 via-70% via-white/95 to-100% to-white px-0.5 w-full h-full"
        direction="col"
        align="center"
        justify="center"
      >
        <Heading
          element="h3"
          size="2xl"
          className={cn(
            "font-general font-semibold text-primary-foreground md:text-4xl xl:text-6xl text-center uppercase",
          )}
        >
          <span className="block">{t("title.line1")}</span>
          <span className="block">{t("title.line2")}</span>
          <span className="block">{t("title.line3")}</span>
        </Heading>

        <Paragraph
          size="base"
          className="mt-6 font-general font-medium text-secondary-foreground md:text-xl text-center not-italic"
        >
          <span className="block">{t("subtitle.line1")}</span>
          <span className="block">{t("subtitle.line2")}</span>
          <span className="block">{t("subtitle.line3")}</span>
        </Paragraph>
        <Flex gap="3" className="mt-9">
          <Button
            variant={"outline"}
            className="p-6 border-primary-foreground rounded-none text-primary-foreground text-xs md:text-sm uppercase cursor-pointer"
          >
            {t("cta.primary")}
          </Button>
          <Button
            variant={"secondary"}
            className="p-6 border border-primary-foreground rounded-none text-xs md:text-sm uppercase text-accent-foreground cursor-pointer"
          >
            {t("cta.secondary")}
          </Button>
        </Flex>
      </Flex>
    </Section>
  );
};

export default HeroSection;
