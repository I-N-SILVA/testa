import type React from "react"
import { Box, Heading, Paragraph, Stack } from "@plyaz/ui"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
  isLast?: boolean
}

export function FeatureCard({ icon, title, subtitle, description, isLast = false }: FeatureCardProps) {
  return (
    <Box className={`p-8 bg-white border-l border-[#00000066] ${isLast ? 'lg:border-r' : ''} hover:shadow-lg transition-shadow duration-300`}>
      <Stack direction="vertical" spacing="6">
        <Box className="w-16 h-16 flex items-center justify-center">{icon}</Box>
        <Stack direction="vertical" spacing="6">
          <Box>
            <Paragraph size="sm" className="text-gray-500 uppercase tracking-wide mb-2">
              {subtitle}
            </Paragraph>
            <Heading size="xl" element="h3" className="text-gray-900">
              {title}
            </Heading>
          </Box>
          <Paragraph size="sm" className="text-gray-600 leading-relaxed">
            {description}
          </Paragraph>
        </Stack>
      </Stack>
    </Box>
  )
}
