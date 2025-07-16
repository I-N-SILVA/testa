import type { resources } from "@plyaz/translations";

import type { routing } from "src/i18n/routing";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: (typeof resources)["en"];
  }
}
