import { getRequestConfig, getTimeZone } from "next-intl/server";
import { hasLocale } from "next-intl";
import { landingResources } from "@plyaz/translations";



export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(
    ["en", "es", "fr", "it", "pt-PT", "pt-BR"],
    requested,
  )
    ? requested
    : "en";
  
    const timeZone = await getTimeZone();

  return {
    locale,
    timeZone: timeZone,
    messages: landingResources[locale],
  };
});
