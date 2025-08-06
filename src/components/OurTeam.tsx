"use client";

import React from "react";
import { Box, Container, Flex, Heading, Section } from "@plyaz/ui";
import { useTranslation } from "@plyaz/translations/frontend";


import { TEAM_MEMBERS } from "@/constants";

import { Members } from "./Members";
import { Member } from "./Member";

const OurTeam = () => {
  const { t } = useTranslation();

  const ceo = TEAM_MEMBERS.find((member) => member.id === 1);
  const others = TEAM_MEMBERS.filter((member) => member.id !== 1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  const ceoVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  const teamVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Section className="pt-16 lg:pt-28" id="about">
      <div
        
        
        }
        
      >
        <div >
          <Heading
            element="h2"
            size="3xl"
            className="xl:mb-12 font-semibold text-foreground lg:text-5xl text-center"
          >
            {t("OurTeam.title")}
          </Heading>
        </div>
        
        <div >
          <Container className="flex lg:bg-[url('/assets/svgs/football-field-emerald.svg')] lg:bg-contain lg:bg-no-repeat lg:bg-center px-0 h-full min-h-full">
            <Flex
              className="w-full"
              direction="col"
              justify="center"
              align="center"
              wrap="wrap"
            >
              <Box className="lg:mt-10 xl:mt-24 mb-16 pt-10 xl:pt-0 w-full">
                <div >
                  <Flex direction="col" gap="5" justify="center" align="center">
                    {ceo && <Member name={ceo.name} role={ceo.role} id={ceo.id} />}
                  </Flex>
                </div>

                <div >
                  {others && <Members members={others} />}
                </div>
              </Box>
            </Flex>
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default OurTeam;
