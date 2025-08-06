"use client";

import { Box, Flex, Heading, Paragraph, Text } from "@plyaz/ui";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@plyaz/translations/frontend";


import { FooterLinkSection } from "@/components";
import { footerSections, bottomLinks } from "@/constants/footer";

export const Footer = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Box
      element="footer"
      className="bg-secondary text-accent-foreground px-4 py-16 lg:px-10 lg:py-28 flex justify-center"
    >
      <div
        
        
        }
        
        className="w-full"
      >
        <Flex
          direction="col"
          align="center"
          className="md:items-start w-full md:max-w-[1362px] gap-10 lg:gap-16 mx-auto"
        >
          <div 
            
            className="w-full"
          >
            <Flex direction="col" gap="3" align="center" justify="center" className="md:gap-6 md:items-start md:max-h-[350px] -ml-0.5 w-full max-w-sm md:max-w-[1362px]">
              {/* Tagline */}
              <div >
                <Heading
                  element="h2"
                  size="lg"
                  className="md:text-start text-base leading-6 tracking-normal font-medium text-tertiary-foreground"
                >
                  {t("Footer.slogan")}
                </Heading>
              </div>

              {/* Logo */}
              <div 
                
                }
                }
              >
                <Image
                  src="/assets/svgs/plyaz-logo-full-light-mode.svg"
                  alt={t("Footer.logoAlt")}
                  width={344}
                  height={77}
                  className="invert h-auto mx-auto md:w-[1362px] md:h-auto cursor-pointer"
                />
              </div>
            </Flex>
          </div>

          {/* Links Layout - Unified Responsive Grid */}
          <div  className="w-full max-w-md md:max-w-[1362px]">
            <Box className="grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-0 md:justify-between md:flex">
              <div  className="md:order-1">
                <FooterLinkSection section={footerSections.product} />
              </div>
              <div  className="md:order-3 justify-self-end">
                <FooterLinkSection section={footerSections.social} />
              </div>
              <div  className="col-span-2 md:col-span-1 md:order-2">
                <FooterLinkSection section={footerSections.company} />
              </div>
            </Box>
          </div>

          {/* Bottom Links and Copyright - Unified */}
          <div  className="w-full max-w-md md:max-w-[1362px]">
            <Flex
              direction="col"
              gap="4"
              className="md:flex-row md:justify-between md:items-center"
            >
              <Flex className="justify-center md:justify-start gap-5 md:gap-10">
                {bottomLinks.map((link, index) => (
                  <div
                    key={link.labelKey}
                    
                    }
                    }
                  >
                    <Link
                      href={link.href}
                      className="text-tertiary-foreground hover:text-accent-foreground transition-colors text-xs leading-4 font-medium"
                    >
                      {t(link.labelKey as keyof typeof t)}
                    </Link>
                  </div>
                ))}
              </Flex>
              <div >
                <Paragraph
                  size="sm"
                  className="text-tertiary-foreground text-center md:text-left text-xs leading-4 font-medium"
                >
                  {t("Footer.copyright")}
                </Paragraph>
              </div>
            </Flex>
          </div>
        </Flex>
      </div>
    </Box>
  );
};