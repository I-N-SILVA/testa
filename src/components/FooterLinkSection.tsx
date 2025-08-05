import { Flex, Text } from "@plyaz/ui";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@plyaz/translations/frontend";

import type { FooterSection, FooterLink } from "@/constants/footer";

export const FooterLinkSection = ({ section }: { section: FooterSection }) => {
  const { t } = useTranslation();

  return (
    <Flex direction="col" className="space-y-2">
      <Text
        variant="caption"
        element="span"
        weight="medium"
        className="text-tertiary-foreground text-base leading-6 uppercase"
      >
        {t(section.titleKey as keyof typeof t)}
      </Text>
      <Flex direction="col" className="space-y-2">
        {section.links.map((link: FooterLink) => (
          <div key={link.labelKey}>
            {link.external ? (
              <Flex
                align="center"
                justify="between"
                className="space-x-2 text-accent-foreground hover:text-accent transition-colors max-w-[125px]"
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base leading-6 font-medium"
                >
                  {t(link.labelKey as keyof typeof t)}
                </Link>
                <Image
                  src="/assets/arrow-up-icon.svg"
                  alt="External link"
                  width={18}
                  height={18}
                  className="w-[18pxh] h-[18px] invert"
                />
              </Flex>
            ) : (
              <Link
                href={link.href}
                className="text-accent-foreground hover:text-accent transition-colors text-base leading-6 font-medium"
              >
                {t(link.labelKey as keyof typeof t)}
              </Link>
            )}
          </div>
        ))}
      </Flex>
    </Flex>
  );
};
