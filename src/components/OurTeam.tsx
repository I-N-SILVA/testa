import React from "react";
import { Box, Container, Flex, Heading, Section } from "@plyaz/ui";
import { useTranslation } from "@plyaz/translations/frontend";
import { motion } from "motion/react";

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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const ceoVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const teamVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Section className="pt-16 lg:pt-28" id="about">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={titleVariants}>
          <Heading
            element="h2"
            size="3xl"
            className="xl:mb-12 font-semibold text-foreground lg:text-5xl text-center"
          >
            {t("OurTeam.title")}
          </Heading>
        </motion.div>
        
        <motion.div variants={backgroundVariants}>
          <Container className="flex lg:bg-[url('/assets/svgs/football-field-emerald.svg')] lg:bg-contain lg:bg-no-repeat lg:bg-center px-0 h-full min-h-full">
            <Flex
              className="w-full"
              direction="col"
              justify="center"
              align="center"
              wrap="wrap"
            >
              <Box className="lg:mt-10 xl:mt-24 mb-16 pt-10 xl:pt-0 w-full">
                <motion.div variants={ceoVariants}>
                  <Flex direction="col" gap="5" justify="center" align="center">
                    {ceo && <Member name={ceo.name} role={ceo.role} id={ceo.id} />}
                  </Flex>
                </motion.div>

                <motion.div variants={teamVariants}>
                  {others && <Members members={others} />}
                </motion.div>
              </Box>
            </Flex>
          </Container>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default OurTeam;
