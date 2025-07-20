import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { getSupportedLanguages } from "@plyaz/translations";
import { TIMEZONE } from "@plyaz/config";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(getSupportedLanguages(), requested)
    ? requested
    : "en";

  return {
    locale,
    timeZone: TIMEZONE,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
