"use client";

import { Flex, Heading, Paragraph, Section, Button } from "@plyaz/ui";
import { useTranslations } from "next-intl";
import React from "react";
import { cn } from "src/utils/cn";
import NavigationHeader from "./NavigationHeader";
import AnimatedDiv from "./AnimatedDiv";

const HeroSection = () => {
  const t = useTranslations("HeroSection");

  return (
    <Section className="relative p-0 w-full h-dvh">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="z-0 relative w-full h-full object-cover"
        poster="hero_image.png"
      >
        <source src="web_hero.mp4" type="video/mp4" />
        <source src="mobile_hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <NavigationHeader />
      
      <AnimatedDiv 
        className="top-0 left-0 z-10 absolute bg-gradient-to-b from-31% from-white/10 via-70% via-white/95 to-100% to-white px-0.5 w-full h-full"
        animation="fadeIn"
        delay={0.5}
      >
        <Flex
          element="div"
          direction="column"
          justify="center"
          align="center"
          className="w-full h-full"
        >
          <AnimatedDiv 
            className="flex flex-col items-center justify-center space-y-8 px-6 text-center"
            animation="staggerChildren"
            delay={0.2}
          >
            <div className="space-y-4">
              <AnimatedDiv animation="fadeInUp" delay={0.5}>
                <Heading
                  size="6xl"
                  element="h1"
                  className="font-bold text-gray-900 leading-tight"
                >
                  {t("title")}
                </Heading>
              </AnimatedDiv>
              
              <AnimatedDiv animation="fadeInUp" delay={0.8}>
                <Paragraph
                  size="xl"
                  className="mx-auto max-w-4xl font-medium text-gray-700 leading-relaxed"
                >
                  {t("subtitle")}
                </Paragraph>
              </AnimatedDiv>
            </div>

            <AnimatedDiv animation="scaleIn" delay={1.2}>
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {t("getStarted")}
              </Button>
            </AnimatedDiv>
          </AnimatedDiv>
        </Flex>
      </AnimatedDiv>
    </Section>
  );
};

export default HeroSection;