// import the original type declarations
// import "react-i18next";
import "next-i18next";
// import all namespaces (for the default language, only)
import { Resources as MyResources } from "./types";

declare module "next-i18next" {
  // and extend them!
  interface Resources extends MyResources {}
}
