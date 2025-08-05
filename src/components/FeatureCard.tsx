import type React from "react";
import { Box, Heading, Paragraph, Stack } from "@plyaz/ui";
import clsx from "clsx";

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
      className={clsx(
        "pb-12 lg:px-5 lg:pb-6",
        "max-w-md mx-auto",
        "border-t lg:border-l lg:border-t-0 border-neutral-300",
        {
          "border-b lg:border-b-0 lg:border-r": isLast,
        },
        "transition-all duration-300 cursor-pointer group",
        "opacity-80 hover:opacity-100",
      )}
    >
      <Stack direction="vertical" spacing="6">
        <Box className="flex items-start py-12 lg:pb-6 lg:pt-0 group-hover:scale-110 transition-transform duration-300">{icon}</Box>
        <Stack direction="vertical" spacing="6">
          <Box>
            <Paragraph
              size="xs"
              className="text-neutral-600 uppercase tracking-wide mb-3 font-semibold leading-4 group-hover:text-emerald-600 transition-colors duration-300"
            >
              {subtitle}
            </Paragraph>
            <Heading
              size="2xl"
              element="h3"
              className="text-neutral-800 mb-3 leading-8 group-hover:text-neutral-900 transition-colors duration-300"
            >
              {title}
            </Heading>
          </Box>
          <Paragraph size="base" className="text-gray-800 leading-6 max-w-md group-hover:text-gray-900 transition-colors duration-300">
            {description}
          </Paragraph>
        </Stack>
      </Stack>
    </Box>
  );
}
