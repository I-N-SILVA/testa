import type React from "react";
import { Box, Heading, Paragraph, Stack } from "@plyaz/ui";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  isLast?: boolean;
}

export function FeatureCard({
  icon,
  title,
  subtitle,
  description,
  isLast = false,
}: FeatureCardProps) {
  return (
    <Box
      className={[
        "pb-12 lg:px-5 lg:pb-6",
        "max-w-md mx-auto",
        "border-t lg:border-l lg:border-t-0 border-neutral-300",
        isLast ? "border-b lg:border-b-0 lg:border-r" : "",
        "hover:-translate-y-2 transition-all duration-500",
        "opacity-80"
      ].join(" ")}
    >
      <Stack direction="vertical" spacing="6">
        <Box className="flex items-start py-12 lg:pb-6 lg:pt-0">{icon}</Box>
        <Stack direction="vertical" spacing="6">
          <Box>
            <Paragraph
              size="xs"
              className="text-neutral-600 uppercase tracking-wide mb-3 font-semibold leading-4"
            >
              {subtitle}
            </Paragraph>
            <Heading
              size="2xl"
              element="h3"
              className="text-neutral-800 mb-3 leading-8"
            >
              {title}
            </Heading>
          </Box>
          <Paragraph size="base" className="text-gray-800 leading-6 max-w-md">
            {description}
          </Paragraph>
        </Stack>
      </Stack>
    </Box>
  );
}
