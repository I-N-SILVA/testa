import { Flex, Heading, Paragraph, Section, Button } from "@plyaz/ui";
import { useTranslations } from "next-intl";
import React from "react";
import { motion } from "motion/react";

import { cn } from "src/utils/cn";

import NavigationHeader from "./NavigationHeader";

const HeroSection = () => {
  const t = useTranslations("HeroSection");

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.2 + 0.5, 
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.15 + 1.1, 
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        delay: 2.2, 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const videoOverlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" }
    }
  };

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
        <source src="mobile_hero.mp4" media="(width <= 1024px)" />
        <source src="web_hero.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <NavigationHeader />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={videoOverlayVariants}
        className="top-0 left-0 z-10 absolute bg-gradient-to-b from-31% from-white/10 via-70% via-white/95 to-100% to-white px-0.5 w-full h-full"
      >
        <Flex
          direction="col"
          align="center"
          justify="center"
          className="w-full h-full"
        >
          <Heading
            element="h1"
            size="2xl"
            className={cn(
              "font-general font-semibold text-primary-foreground md:text-4xl xl:text-6xl text-center uppercase",
            )}
          >
            <motion.span 
              className="block"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              {t("title.line1")}
            </motion.span>
            <motion.span 
              className="block"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              {t("title.line2")}
            </motion.span>
            <motion.span 
              className="block"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              {t("title.line3")}
            </motion.span>
          </Heading>

          <Paragraph
            size="base"
            className="mt-6 font-general font-medium text-secondary-foreground md:text-xl text-center not-italic"
          >
            <motion.span 
              className="block"
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              {t("subtitle.line1")}
            </motion.span>
            <motion.span 
              className="block"
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              {t("subtitle.line2")}
            </motion.span>
            <motion.span 
              className="block"
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              {t("subtitle.line3")}
            </motion.span>
          </Paragraph>
          
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-3 mt-9"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                variant={"outline"}
                className="p-6 border-primary-foreground rounded-none text-primary-foreground text-xs md:text-sm uppercase cursor-pointer hover:bg-primary-foreground hover:text-white transition-colors duration-300"
              >
                {t("cta.primary")}
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                variant={"secondary"}
                className="p-6 border border-primary-foreground rounded-none text-xs md:text-sm uppercase text-accent-foreground cursor-pointer hover:bg-accent transition-colors duration-300"
              >
                {t("cta.secondary")}
              </Button>
            </motion.div>
          </motion.div>
        </Flex>
      </motion.div>
    </Section>
  );
};

export default HeroSection;
