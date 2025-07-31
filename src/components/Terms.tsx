import React from "react";
import Image from "next/image";
import { Flex, FormattedDate, Heading, Paragraph, Section } from "@plyaz/ui";
import { useTranslation } from "@plyaz/translations/frontend";

import SecurityIcon from "@/public/svgs/security.svg";
import { type PolicySection } from "@/types";

import { SectionBlock } from "./SectionBlock";

export const Terms = () => {
  const { t } = useTranslation();
  const terms: PolicySection[] = [
    {
      title: t("TermsOfServices.sections.Acceptance of Terms.title"),
      body: t("TermsOfServices.sections.Acceptance of Terms.body"),
    },
    {
      title: t("TermsOfServices.sections.Eligibility.title"),
      body: t("TermsOfServices.sections.Eligibility.body"),
    },
    {
      title: t("TermsOfServices.sections.Account Registration.title"),
      body: t("TermsOfServices.sections.Account Registration.body"),
    },
    {
      title: t("TermsOfServices.sections.Intellectual Property.title"),
      body: t("TermsOfServices.sections.Intellectual Property.body"),
    },
    {
      title: t("TermsOfServices.sections.User Conduct.title"),
      body: t("TermsOfServices.sections.User Conduct.body"),
    },
    {
      title: t("TermsOfServices.sections.Transactions and Payments.title"),
      body: t("TermsOfServices.sections.Transactions and Payments.body"),
    },
    {
      title: t("TermsOfServices.sections.Privacy.title"),
      body: t("TermsOfServices.sections.Privacy.body"),
    },
    {
      title: t("TermsOfServices.sections.Disclaimers.title"),
      body: t("TermsOfServices.sections.Disclaimers.body"),
    },
    {
      title: t("TermsOfServices.sections.Limitation of Liability.title"),
      body: t("TermsOfServices.sections.Limitation of Liability.body"),
    },
    {
      title: t("TermsOfServices.sections.Indemnification.title"),
      body: t("TermsOfServices.sections.Indemnification.body"),
    },
    {
      title: t("TermsOfServices.sections.Modifications.title"),
      body: t("TermsOfServices.sections.Modifications.body"),
    },
    {
      title: t("TermsOfServices.sections.Governing Law.title"),
      body: t("TermsOfServices.sections.Governing Law.body"),
    },
    {
      title: t("TermsOfServices.sections.Termination.title"),
      body: t("TermsOfServices.sections.Termination.body"),
    },
    {
      title: t("TermsOfServices.sections.contact.title"),
      body: t("TermsOfServices.sections.contact.body"),
    },
  ];

  return (
    <Section className="mx-auto px-8 lg:px-0 py-16 lg:py-28 w-auto lg:max-w-[768px] h-full">
      <Flex direction="col" align="center" justify="center" className="gap-12">
        <Flex direction="col" align="center" justify="center" gap="4">
          <Image src={SecurityIcon} alt="Terms of services" />
          <Heading
            element="h3"
            size="3xl"
            className="font-semibold text-primary-foreground lg:text-5xl"
          >
            {t("TermsOfServices.title")}
          </Heading>
          <Paragraph size="base" className="text-secondary-foreground">
            {t("TermsOfServices.lastUpdated")}&nbsp;
            <FormattedDate
              element="span"
              variant="body"
              weight="normal"
              className="text-secondary-foreground"
              date={Date.now()}
            />
          </Paragraph>
        </Flex>

        <Flex direction="col" align="center" justify="center" gap="6">
          {terms.map((term) => (
            <SectionBlock
              key={term.title}
              title={term.title}
              body={term.body}
            />
          ))}
        </Flex>
      </Flex>
    </Section>
  );
};
