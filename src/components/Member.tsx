import { Flex, Heading, Paragraph } from "@plyaz/ui";
import React from "react";
import { useTranslation } from "@plyaz/translations/frontend";

import { type TeamMembers } from "@/types";
import { cn } from "src/utils/cn";

export const Member = ({ id, name, role }: TeamMembers) => {
  const { t } = useTranslation();

  return (
    <Flex
      direction="col"
      gap="4"
      justify="center"
      align="center"
      className={cn(
        `lg:last:col-start-auto lg:nth-last-2:col-start-2 last:col-start-2 lg:last:col-end-auto lg:nth-last-2:col-end-3 last:col-end-3 xl:w-[243px] xl:h-[162px]`,
      )}
    >
      <Flex
        justify="center"
        align="center"
        className="bg-[url('public/assets/svgs/t-shirt.svg')] bg-cover bg-no-repeat bg-center px-0 w-[80px] h-[80px] text-primary-foreground"
      >
        <Paragraph size="lg" className="mb-3 text-primary text-3xl">
          {id}
        </Paragraph>
      </Flex>
      <Flex direction="col" gap="1" justify="center" align="center">
        <Heading
          element="h3"
          size="lg"
          className="text-primary-foreground text-center"
        >
          {t(name as keyof typeof t)}
        </Heading>
        <Paragraph
          size="base"
          className="text-secondary-foreground text-xs xl:text-base text-center"
        >
          {t(role as keyof typeof t)}
        </Paragraph>
      </Flex>
    </Flex>
  );
};
