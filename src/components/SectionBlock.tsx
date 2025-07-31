import { Flex, Heading, Paragraph } from "@plyaz/ui";
import React from "react";

import { type PolicySection } from "@/types";

export const SectionBlock = ({ title, body }: PolicySection) => {
  return (
    <Flex justify="center" align="center" gap="2" direction="col">
      <Heading
        element="h3"
        size="base"
        className="font-general font-semibold text-secondary-foreground uppercase"
      >
        {title}
      </Heading>
      <Flex direction="col" gap="1" className="text-center whitespace-pre-line">
        <Paragraph
          size="base"
          className="font-medium text-secondary-foreground text-center"
        >
          {body}
        </Paragraph>
      </Flex>
    </Flex>
  );
};
