// place it where you store your types
// import all namespaces for default language only
import common from "../public/locales/sv/common.json";

export interface Resources {
  common: typeof common;
  // as many as files you have
}

export type Locale = "sv" | "en" | "it";
