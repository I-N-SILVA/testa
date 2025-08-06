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

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <div
        
        
        
      >
        <Container
          element="header"
          className="hidden lg:block top-5 left-6/12 z-20 fixed backdrop-blur-[20px] px-0 xl:w-full h-14 -translate-x-1/2 -translate-y-0 bg-accent-foreground"
        >
          <Flex>
            <div
              
              }
              }
            >
              <Flex
                justify="center"
                align="center"
                className="border border-strong border-solid w-14 h-14 cursor-pointer"
              >
                <Image alt="Plyaz mode" src={PlyazMode} />
              </Flex>
            </div>
            
            <div >
              <Box>
                <Flex
                  justify="center"
                  align="center"
                  className="border border-strong border-l-0 border-solid w-[187px] h-14"
                >
                  <Image alt="Plyaz Logo" src={PlyazLogo} />
                </Flex>
              </Box>
            </div>
            
            <Flex
              justify="center"
              align="center"
              gap="8"
              className="flex-1 px-7.5 border-y border-y-strong font-medium text-base uppercase"
            >
              {navigationLinks.map((item, index) => (
                <div
                  key={item.label}
                  
                  }
                  }
                >
                  <Link
                    href={item.href}
                    className="px-3 text-primary-foreground visited:text-primary-foreground hover:text-emerald-600 transition-colors duration-300 relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
                  </Link>
                </div>
              ))}
            </Flex>
            
            <div
              
              }
              whileTap={{ scale: 0.95 }}
              }
            >
              <Button
                variant={"secondary"}
                className="p-6 rounded-none h-14 max-h-full font-medium text-base uppercase text-accent-foreground hover:bg-emerald-600 hover:text-white transition-all duration-300"
              >
                {t("actions.signUp")}
              </Button>
            </div>
          </Flex>
        </Container>
      </div>
      <MobileNavigation navigationLinks={navigationLinks} />
    </>
  );
};

export default NavigationHeader;
