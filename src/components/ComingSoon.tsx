"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import { Box, Container, Flex, Heading, Paragraph } from "@plyaz/ui";
import PlyazLogo from "@/public/svgs/plyaz-logo-full-light-mode.svg";

export function ComingSoon(): React.ReactElement {
  const t = useTranslations("ComingSoon");

  return (
    <Box element="main" className="min-h-screen bg-background">
      <Flex
        className="min-h-screen"
        direction="col"
        align="center"
        justify="center"
      >
        <Container className="px-4 py-16 text-center">
          <Box className="mb-12 flex justify-center">
            <Image
              src={PlyazLogo}
              alt="Plyaz"
              width={254}
              height={58}
              priority
              className="w-48 md:w-64 lg:w-80"
            />
          </Box>

          <Heading
            element="h1"
            size="4xl"
            className="font-general font-bold text-primary-foreground uppercase mb-6"
          >
            {t("tagline", "The Future of Sports in Web3")}
          </Heading>

          <Paragraph
            size="lg"
            className="font-general text-secondary-foreground max-w-2xl mx-auto mb-4"
          >
            {t(
              "description",
              "Our platform is currently in development. A new experience is coming soon.",
            )}
          </Paragraph>

          <Box>
            <Paragraph
              size="base"
              className="font-general text-tertiary-foreground"
            >
              {t("stayTuned", "Stay tuned for updates")}
            </Paragraph>
          </Box>
        </Container>
      </Flex>
    </Box>
  );
}

export default ComingSoon;