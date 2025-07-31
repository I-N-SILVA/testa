import React from "react";
import { Flex, FormattedDate, Heading, Paragraph, Section } from "@plyaz/ui";
import Image from "next/image";
import { useTranslation } from "@plyaz/translations/frontend";

import CookiesIcon from "@/public/svgs/cookie.svg";
import { type PolicySection } from "@/types";

import { SectionBlock } from "./SectionBlock";

export const Cookies = () => {
  const { t } = useTranslation();

  const cookies: PolicySection[] = [
    {
      title: t("CookiePolicy.sections.whatAreCookies.title"),
      body: t("CookiePolicy.sections.whatAreCookies.body"),
    },
    {
      title: t("CookiePolicy.sections.howWeUseCookies.title"),
      body: t("CookiePolicy.sections.howWeUseCookies.body"),
    },
    {
      title: t("CookiePolicy.sections.typesOfCookies.title"),
      body: t("CookiePolicy.sections.typesOfCookies.body"),
    },
    {
      title: t("CookiePolicy.sections.contact.title"),
      body: t("CookiePolicy.sections.contact.body"),
    },
  ];

  return (
    <Section className="mx-auto px-8 lg:px-0 py-16 lg:py-28 w-auto lg:max-w-[768px] h-full">
      <Flex justify="center" align="center" className="gap-12" direction="col">
        <Flex justify="center" align="center" gap="4" direction="col">
          <Image src={CookiesIcon} alt="Cookies Icon" />
          <Heading element="h3" size="3xl" className="font-semibold text-5xl">
            {t("CookiePolicy.title")}
          </Heading>
          <Paragraph size="base" className="text-secondary-foreground">
            {t("CookiePolicy.lastUpdated")}&nbsp;
            <FormattedDate
              element="span"
              weight="normal"
              variant="body"
              className="text-secondary-foreground"
              date={Date.now()}
            />
          </Paragraph>
        </Flex>
        <Flex justify="center" align="center" gap="6" direction="col">
          {cookies.map((value, idx) => {
            return (
              <SectionBlock
                key={value.title + idx}
                title={value.title}
                body={value.body}
              />
            );
          })}
        </Flex>
      </Flex>
    </Section>
  );
};
