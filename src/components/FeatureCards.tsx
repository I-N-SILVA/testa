import {
  Container,
  Section,
  Heading,
  Paragraph,
  Grid,
  TranslatedText,
} from "@plyaz/ui";
import { useTranslations } from "next-intl";

import { FeatureCard } from "@/components";

import {
  AthleteTokenizationIcon,
  FantasySportsIcon,
  FanEngagementIcon,
  EcosystemIcon,
} from "./icons";


export default function FeaturesSection() {
  const t = useTranslations("FeatureCards");
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
  ];

  return (
    <Section className="py-20" id="features">
      <Container>
        <div className="mb-16 text-center">
          <TranslatedText
            translationKey="FeatureCards.title"
            element="p"
            size="base"
            weight="semibold"
            variant="heading"
            className="inline-block bg-emerald-50 mb-3 px-4 py-1 text-emerald-700 uppercase leading-6 tracking-wide"
          />
          <Heading
            size="4xl"
            element="h2"
            className="mb-3 font-semibold text-gray-900"
          >
            {t("subtitle")}
          </Heading>
          <Paragraph
            size="lg"
            className="mx-auto max-w-3xl font-medium text-gray-600 leading-7"
          >
            {t("description")}
          </Paragraph>
        </div>

        <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
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
  );
}
