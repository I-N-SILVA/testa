import { Container, Section, Heading, Paragraph, Grid, TranslatedText } from "@plyaz/ui"
import { useTranslations } from "next-intl"

import { FeatureCard } from "./FeatureCard"
import {
  AthleteTokenizationIcon,
  FantasySportsIcon,
  FanEngagementIcon,
  EcosystemIcon,
} from "./FeatureIcons"

export default function FeaturesSection() {
  const t = useTranslations("FeatureCards")
  const features = [
    {
      icon: <AthleteTokenizationIcon />,
      subtitle: t("items.athleteTokenization.subtitle"),
      title: t("items.athleteTokenization.title"),
      description: t("items.athleteTokenization.description"),
    },
    {
      icon: <FantasySportsIcon />,
      subtitle: t("items.fantasySports.subtitle"),
      title: t("items.fantasySports.title"),
      description: t("items.fantasySports.description"),
    },
    {
      icon: <FanEngagementIcon />,
      subtitle: t("items.fanEngagement.subtitle"),
      title: t("items.fanEngagement.title"),
      description: t("items.fanEngagement.description"),
    },
    {
      icon: <EcosystemIcon />,
      subtitle: t("items.ecosystem.subtitle"),
      title: t("items.ecosystem.title"),
      description: t("items.ecosystem.description"),
    },
  ]

  return (
    <Section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <TranslatedText translationKey="FeatureCards.title" element="p" size="base" weight="semibold" variant="heading" className="uppercase tracking-wide mb-3 text-emerald-700 bg-emerald-50 px-4 py-1 inline-block leading-6" />
          <Heading size="4xl" element="h2" className="text-gray-900 mb-3 font-semibold">
            {t("subtitle")}
          </Heading>
          <Paragraph size="lg" className="text-gray-600 max-w-3xl mx-auto leading-7 font-medium">
            {t("description")}
          </Paragraph>
        </div>

        <Grid className="mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              subtitle={feature.subtitle}
              title={feature.title}
              description={feature.description}
              isLast={index === features.length - 1}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
