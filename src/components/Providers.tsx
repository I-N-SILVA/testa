"use client";
import type { Messages } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import type { SupportedLanguage } from "@plyaz/types";
import { timeZone } from "@plyaz/translations";
import config from "@plyaz/translations/config";
import { TranslationProvider } from "@plyaz/translations/frontend/providers";

export default function Providers({
  children,
  messages,
  locale,
}: {
  children: React.ReactNode;
  messages: Messages;
  locale: SupportedLanguage;
}) {
  return (
    <NextIntlClientProvider
      timeZone={timeZone}
      messages={messages}
      locale={locale}
    >
      <TranslationProvider
        config={{
          ...config,
        }}
      >
        {children}
      </TranslationProvider>
    </NextIntlClientProvider>
  );
}
