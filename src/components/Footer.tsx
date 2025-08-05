import { Box, Flex, Heading, Paragraph, Text } from "@plyaz/ui";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@plyaz/translations/frontend";

import { FooterLinkSection } from "@/components";
import { footerSections, bottomLinks } from "@/constants/footer";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      element="footer"
      className="bg-secondary text-accent-foreground px-4 py-16 lg:px-10 lg:py-28 flex justify-center"
    >
      <Flex
        direction="col"
        align="center"
        className="md:items-start w-full md:max-w-[1362px] gap-10 lg:gap-16"
      >
        <Flex direction="col" gap="3" align="center" justify="center" className="md:gap-6 md:items-start md:max-h-[350px] -ml-0.5 w-full max-w-sm md:max-w-[1362px]">
        {/* Tagline */}
        <Heading
          element="h2"
          size="lg"
          className="md:text-start text-base leading-6 tracking-normal font-medium text-tertiary-foreground"
        >
          {t("Footer.slogan")}
        </Heading>

        {/* Logo */}
          <Image
            src="/assets/svgs/plyaz-logo-full-light-mode.svg"
            alt={t("Footer.logoAlt")}
            width={344}
            height={77}
            className="invert h-auto mx-auto md:w-[1362px] md:h-auto"
          />
        </Flex>

        {/* Links Layout - Unified Responsive Grid */}
        <Box className="w-full max-w-md md:max-w-[1362px]">
          <Box className="grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-0 md:justify-between md:flex">
            <Box className="md:order-1">
              <FooterLinkSection section={footerSections.product} />
            </Box>
            <Box className="md:order-3 justify-self-end">
              <FooterLinkSection section={footerSections.social} />
            </Box>
            <Box className="col-span-2 md:col-span-1 md:order-2">
              <FooterLinkSection section={footerSections.company} />
            </Box>
          </Box>
        </Box>

        {/* Bottom Links and Copyright - Unified */}
        <Box className="w-full max-w-md md:max-w-[1362px]">
          <Flex
            direction="col"
            gap="4"
            className="md:flex-row md:justify-between md:items-center"
          >
            <Flex className="justify-center md:justify-start gap-5 md:gap-10">
              {bottomLinks.map((link) => (
                <Link
                  key={link.labelKey}
                  href={link.href}
                  className="text-tertiary-foreground hover:text-accent-foreground transition-colors text-xs leading-4 font-medium"
                >
                  {t(link.labelKey as keyof typeof t)}
                </Link>
              ))}
            </Flex>
            <Paragraph
              size="sm"
              className="text-tertiary-foreground text-center md:text-left text-xs leading-4 font-medium"
            >
              {t("Footer.copyright")}
            </Paragraph>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};