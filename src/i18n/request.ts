import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { getSupportedLanguages } from "@plyaz/translations";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(getSupportedLanguages(), requested)
    ? requested
    : "en";

  return {
    locale,
    timeZone: "Europe/London",
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
