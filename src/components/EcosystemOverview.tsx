"use client";

import { 
  Section, 
  Container, 
  Heading, 
  Paragraph, 
  Grid, 
  Box, 
  Button,
  TranslatedText 
} from "@plyaz/ui";
import React from "react";
import { useTranslations } from "next-intl";


const EcosystemOverview = () => {
  const t = useTranslations("EcosystemOverview");

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
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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

  const ecosystemCards = [
    {
      id: "fans",
      title: t("cards.fans.title"),
      items: [
        t("cards.fans.item1"),
        t("cards.fans.item2"),
        t("cards.fans.item3"),
        t("cards.fans.item4"),
        t("cards.fans.item5")
      ],
      cta: t("cards.fans.cta"),
      gradient: "from-blue-500 to-purple-600",
      icon: "👥"
    },
    {
      id: "athletes",
      title: t("cards.athletes.title"),
      items: [
        t("cards.athletes.item1"),
        t("cards.athletes.item2"),
        t("cards.athletes.item3"),
        t("cards.athletes.item4"),
        t("cards.athletes.item5")
      ],
      cta: t("cards.athletes.cta"),
      gradient: "from-emerald-500 to-teal-600",
      icon: "🏃‍♂️"
    },
    {
      id: "scoutsAgents",
      title: t("cards.scoutsAgents.title"),
      items: [
        t("cards.scoutsAgents.item1"),
        t("cards.scoutsAgents.item2"),
        t("cards.scoutsAgents.item3"),
        t("cards.scoutsAgents.item4"),
        t("cards.scoutsAgents.item5")
      ],
      cta: t("cards.scoutsAgents.cta"),
      gradient: "from-orange-500 to-red-600",
      icon: "🔍"
    },
    {
      id: "club",
      title: t("cards.club.title"),
      items: [
        t("cards.club.item1"),
        t("cards.club.item2"),
        t("cards.club.item3"),
        t("cards.club.item4"),
        t("cards.club.item5")
      ],
      cta: t("cards.club.cta"),
      gradient: "from-indigo-500 to-blue-600",
      icon: "🏟️"
    }
  ];

  return (
    <Section className="py-20 bg-gradient-to-br from-gray-50 to-white" id="ecosystem">
      <Container>
        <div
          
          
          }
          
        >
          {/* Header */}
          <div  className="text-center mb-16">
            <TranslatedText
              translationKey="EcosystemOverview.tag"
              element="p"
              size="base"
              weight="semibold"
              variant="heading"
              className="inline-block bg-emerald-50 mb-4 px-4 py-2 text-emerald-700 uppercase leading-6 tracking-wide rounded-full"
            />
            <Heading
              size="4xl"
              element="h2"
              className="mb-6 font-bold text-gray-900"
            >
              {t("title")}
            </Heading>
            <Paragraph
              size="lg"
              className="mx-auto max-w-3xl font-medium text-gray-600 leading-8"
            >
              {t("subtitle")}
            </Paragraph>
          </div>

          {/* Cards Grid */}
          <Grid className="grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {ecosystemCards.map((card, index) => (
              <div
                key={card.id}
                
                }
                }
                className="group"
              >
                <Box className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Card Header */}
                  <div className={`bg-gradient-to-r ${card.gradient} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 text-6xl opacity-20 transform rotate-12">
                      {card.icon}
                    </div>
                    <Heading 
                      element="h3" 
                      size="xl" 
                      className="font-bold mb-2 relative z-10"
                    >
                      {card.title}
                    </Heading>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {card.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          }
                          className="flex items-start space-x-3"
                        >
                          <span className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-2" />
                          <Paragraph size="sm" className="text-gray-700 leading-relaxed">
                            {item}
                          </Paragraph>
                        </motion.li>
                      ))}
                    </ul>

                    <div
                      }
                      whileTap={{ scale: 0.95 }}
                      }
                    >
                      <Button
                        variant="outline"
                        className={`w-full py-3 border-2 text-gray-700 font-semibold uppercase tracking-wide hover:bg-gradient-to-r hover:${card.gradient} hover:text-white hover:border-transparent transition-all duration-300`}
                      >
                        {card.cta}
                      </Button>
                    </div>
                  </div>
                </Box>
              </div>
            ))}
          </Grid>

          {/* Bottom CTA */}
          <div  className="text-center">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div
                }
                whileTap={{ scale: 0.95 }}
                }
              >
                <Button
                  variant="default"
                  className="px-8 py-4 bg-emerald-600 text-white font-semibold uppercase tracking-wide hover:bg-emerald-700 transition-all duration-300"
                >
                  {t("cta.backAthletes")}
                </Button>
              </div>
              <div
                }
                whileTap={{ scale: 0.95 }}
                }
              >
                <Button
                  variant="outline"
                  className="px-8 py-4 border-emerald-600 text-emerald-600 font-semibold uppercase tracking-wide hover:bg-emerald-600 hover:text-white transition-all duration-300"
                >
                  {t("cta.shareSuccess")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default EcosystemOverview;
