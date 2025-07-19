import { Container, Section, Heading, Paragraph, Grid, TranslatedText } from "@plyaz/ui"

import { FeatureCard } from "./FeatureCard"
import {
  AthleteTokenizationIcon,
  FantasySportsIcon,
  FanEngagementIcon,
  EcosystemIcon,
} from "./FeatureIcons"

export default function FeaturesSection() {
  const features = [
    {
      icon: <AthleteTokenizationIcon />,
      subtitle: "YOUR TALENT DESERVES RECOGNITION",
      title: "Athlete tokenization",
      description:
        "Turn your athletic talent into unique fan experiences. Let scouts and clubs vie for your attention while you build your authentic personal brand and get rewarded for your dedication.",
    },
    {
      icon: <FantasySportsIcon />,
      subtitle: "FANTASY POWERED BY REAL RELATIONSHIPS",
      title: "Fantasy sports",
      description:
        "Create your fantasy team with athletes you support. Your passion boosts their performance. Join leagues where fandom meets strategy.",
    },
    {
      icon: <FanEngagementIcon />,
      subtitle: "LEVEL UP YOUR FAN STATUS",
      title: "Fan engagement",
      description:
        "Take on challenges to show your super fan status. Unlock exclusive content and connect with athletes - Be part of their journey and celebrations.",
    },
    {
      icon: <EcosystemIcon />,
      subtitle: "THE SPORTS WORLD'S BEST-KEPT SECRET",
      title: "Plyaz ecosystem",
      description:
        "Join industry pros and super fans to discover how careers are built in sports. Connect with key players where passion meets opportunity.",
    },
  ]

  return (
    <Section className="py-20">
      <Container className="max-w-7xl">
        <div className="text-center mb-16">
          <TranslatedText translationKey="FeatureCards.title" element="p" size="base" weight="semibold" variant="heading" className="uppercase tracking-wide mb-4 text-orange-600 leading-6" />
          <Heading size="4xl" element="h2" className="text-gray-900 mb-6 leading-10 font-semibold">
            Revolutionary features
          </Heading>
          <Paragraph size="lg" className="text-gray-600 max-w-3xl mx-auto leading-7">
            Experience the future of sports investment through our cutting-edge platform.
          </Paragraph>
        </div>

        <Grid gap="8" className="mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
