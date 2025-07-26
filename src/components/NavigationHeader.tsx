"use client";
import { Box, Button, Container, Flex } from "@plyaz/ui";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

import PlyazMode from "@/public/svgs/plyaz-icon-light-mode.svg";
import PlyazLogo from "@/public/svgs/plyaz-logo-full-light-mode.svg";

import { MobileNavigation } from "./MobileNavigationHeader";

export interface NavigationLink {
  label: string;
  href: string;
}

const NavigationHeader = () => {
  const t = useTranslations("NavigationHeader");
  const navigationLinks: NavigationLink[] = [
    { label: t("links.features"), href: "#features" },
    { label: t("links.ecosystem"), href: "#ecosystem" },
    { label: t("links.docs"), href: "https://plyaz.gitbook.io/plyaz" },
    { label: t("links.about"), href: "#about" },
    { label: t("links.blog"), href: "#blogs" },
  ];

  return (
    <>
      <Container
        element="header"
        className="hidden lg:block top-5 left-6/12 z-20 fixed backdrop-blur-[20px] px-0 xl:w-full h-14 -translate-x-1/2 -translate-y-0 bg-accent-foreground"
      >
        <Flex>
          <Flex
            justify="center"
            align="center"
            className="border border-strong border-solid w-14 h-14"
          >
            <Image alt="Plyaz mode" src={PlyazMode} />
          </Flex>
          <Box>
            <Flex
              justify="center"
              align="center"
              className="border border-strong border-l-0 border-solid w-[187px] h-14"
            >
              <Image alt="Plyaz Logo" src={PlyazLogo} />
            </Flex>
          </Box>
          <Flex
            justify="center"
            align="center"
            gap="8"
            className="flex-1 px-7.5 border-y border-y-strong font-medium text-base uppercase"
          >
            {navigationLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 text-primary-foreground visited:text-primary-foreground"
              >
                {item.label}
              </Link>
            ))}
          </Flex>
          <Button
            variant={"secondary"}
            className="p-6 rounded-none h-14 max-h-full font-medium text-base uppercase text-accent-foreground"
          >
            {t("actions.signUp")}
          </Button>
        </Flex>
      </Container>
      <MobileNavigation navigationLinks={navigationLinks} />
    </>
  );
};

export default NavigationHeader;
