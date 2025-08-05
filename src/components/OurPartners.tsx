import { Container, Flex, Heading, Section } from "@plyaz/ui";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

import GrandSport from "@/public/Grand_sport.svg";
import RiseLogo from "@/public/Rise_logo.svg";
import ArdeUniversity from "@/public/ARDEN_university_logo.svg";

const OurPartners = () => {
  const t = useTranslations("OurPartners");
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const partners = [
    { src: GrandSport, alt: "Grand Sport Logo", className: "flex-1 self-center w-[270px] h-[80px]" },
    { src: RiseLogo, alt: "Rise Logo", className: "flex-1 self-center w-[116px] h-[76px]" },
    { src: ArdeUniversity, alt: "Arde University Logo", className: "flex-1 self-center w-[303px] h-[76px]" }
  ];

  return (
    <Section className="pt-16 lg:pt-28">
      <Container className="w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <Flex
            justify="center"
            align="center"
            direction="col"
            className="gap-8 lg:gap-16"
          >
            <motion.div variants={titleVariants}>
              <Heading
                element="h2"
                size="3xl"
                className="font-semibold text-foreground lg:text-5xl"
              >
                {t("title")}
              </Heading>
            </motion.div>

            <Flex
              justify="between"
              align="center"
              className="gap-10 px-0 lg:px-10 w-full"
              wrap="wrap"
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.alt}
                  variants={logoVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    className={`${partner.className} filter grayscale hover:grayscale-0 transition-all duration-300`}
                  />
                </motion.div>
              ))}
            </Flex>
          </Flex>
        </motion.div>
      </Container>
    </Section>
  );
};

export default OurPartners;
