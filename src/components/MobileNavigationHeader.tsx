"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Button, Flex } from "@plyaz/ui";
import { AlignJustify, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import PlyazMode from "@/public/svgs/plyaz-icon-light-mode.svg";
import { cn } from "src/utils/cn";

import type { NavigationLink } from "./NavigationHeader";

interface MobileNavigationProps {
  navigationLinks: NavigationLink[];
}

export const MobileNavigation = ({
  navigationLinks,
}: MobileNavigationProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenu = () => setIsOpenMenu((prev) => !prev);
  const t = useTranslations("NavigationHeader");
  useEffect(() => {
    // Prevent background scrolling when the mobile menu is open
    document.body.style.overflow = isOpenMenu ? "hidden" : "auto";

    // Reset overflow to default when component unmounts or menu closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenMenu]);

  return (
    <Box
      element="header"
      className={cn(
        "lg:hidden block top-0 left-0 z-30 fixed w-full",
        isOpenMenu ? "bg-primary h-dvh" : "bg-transparent",
      )}
    >
      <Box className="top-5 right-0 fixed px-0 w-full h-14">
        <Flex justify="between" align="center" className="relative mx-4 h-full">
          <Flex
            justify="center"
            align="center"
            className="border border-strong border-solid w-14 h-14 bg-accent-foreground"
          >
            <Image alt="Plyaz mode" src={PlyazMode} />
          </Flex>
          <div className="flex-1 px-7.5 border-y border-y-strong w-full h-full bg-accent-foreground" />
          <Flex>
            <Button
              variant={"secondary"}
              className="p-6 rounded-none h-14 max-h-full font-medium text-base uppercase text-accent-foreground"
            >
              {t("actions.signUp")}
            </Button>
            <Flex
              justify="center"
              align="center"
              className="border border-strong border-solid w-14 h-14 bg-accent-foreground"
              onClick={handleMenu}
            >
              {isOpenMenu ? <X /> : <AlignJustify />}
            </Flex>
          </Flex>
        </Flex>

        <Box
          className={cn(
            "px-4 py-16",
            isOpenMenu ? "block lg:hidden" : "hidden",
          )}
        >
          <Flex
            justify="start"
            align="start"
            direction="col"
            gap="3"
            className="flex-1 border-0 font-medium text-3xl text-left uppercase"
          >
            {navigationLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpenMenu(false)}
                className="text-primary-foreground visited:text-primary-foreground"
              >
                {item.label}
              </Link>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
